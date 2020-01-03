/* Package declaration */

package main


/* Import(s) */

import (
  "fmt"
  "net/http"
  "os"
  "github.com/gin-gonic/gin"
)


/* Helper(s) */

func bindInterface() string {
  if gin.Mode() == gin.ReleaseMode {
    return "0.0.0.0"
  }
  return "127.0.0.1"
}


func bindPort() string {
  result, found := os.LookupEnv("PORT")
  if found {
    return result
  }
  return "5000"
}


func bindAddress() string {
  return fmt.Sprintf(
    "%s:%s",
    bindInterface(),
    bindPort(),
  )
}


func indexHandler(context *gin.Context) {
  context.HTML(
    http.StatusOK,
    "index.html",
    nil,
  )
}


/* Application entry-point */

func main() {
  router := gin.New()
  router.LoadHTMLGlob("index.html")
  router.Use(gin.Logger(), gin.Recovery())
  router.GET("/", indexHandler)
  router.Run(bindAddress())
}
