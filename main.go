/* Package declaration */

package main


/* Import(s) */

import (
  "fmt"
  "net/http"
  "os"
  "strings"
  "github.com/gin-gonic/gin"
)


/* Variable(s) */

var ROUTER *gin.Engine


/* Helper(s) */

func bindInterface() string {
  return envValueOrDefault("INTERFACE", "127.0.0.1")
}

func bindPort() string {
  return envValueOrDefault("PORT", "5001")
}

func bindAddress() string {
  return fmt.Sprintf(
    "%s:%s",
    bindInterface(),
    bindPort(),
  )
}

func debug() bool {
  return envValueOrDefault("DEBUG", "true") == "true"
}

func envValueOrDefault(key string, defaultValue string) string {
  value := os.Getenv(key)
  if value == "" {
    return defaultValue
  }
  return value
}

func ginMode() string {
  if debug() {
    return gin.DebugMode
  }
  return gin.ReleaseMode
}

func trustedProxies() []string {
  trustedProxies := envValueOrDefault("TRUSTED_PROXIES", "")
  if trustedProxies == "" {
    return nil
  }
  return strings.Split(trustedProxies, ",")
}

/* Handler(s) */

func errorHandler(ginContext *gin.Context) {
  ginContext.HTML(
    http.StatusOK,
    "error.html",
    nil,
  )
}

func indexHandler(ginContext *gin.Context) {
  ginContext.HTML(
    http.StatusOK,
    "index.html",
    nil,
  )
}


/* Application initializer */

func init() {
  gin.SetMode(ginMode())

  router := gin.New()
  router.SetTrustedProxies(trustedProxies())
  router.LoadHTMLGlob("templates/*.html")
  router.Use(gin.Logger(), gin.Recovery())
  router.GET("/", indexHandler)
  router.GET("/error.html", errorHandler)
  router.GET("/index.html", indexHandler)
  router.StaticFile("/favicon.ico", "assets/favicon.ico")
  router.Static("/assets", "assets")

  ROUTER = router
}


/* Application entry-point */

func main() {
  ROUTER.Run(bindAddress())
}
