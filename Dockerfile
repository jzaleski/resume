FROM golang:1.18rc1-alpine3.15 AS builder

WORKDIR /app

COPY go.mod ./
COPY go.sum ./
RUN go mod download

COPY main.go ./main.go
RUN go build -o ./resume

FROM alpine:3.15

RUN apk add ca-certificates

WORKDIR /app

COPY --from=builder /app/resume ./bin/resume

CMD ["/app/bin/resume"]
