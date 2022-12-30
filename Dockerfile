FROM golang:1.19.4-alpine3.17 AS builder

WORKDIR /app

COPY go.mod ./
COPY go.sum ./
RUN go mod download

COPY main.go ./main.go
RUN go build -o ./resume

FROM alpine:3.17

RUN apk add ca-certificates

WORKDIR /app

COPY templates/index.html ./templates/index.html
COPY --from=builder /app/resume ./bin/resume

CMD ["/app/bin/resume"]
