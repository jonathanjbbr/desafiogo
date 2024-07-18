FROM golang:1.22 AS build
WORKDIR /app
COPY ./hello.go /app
RUN go env -w GO111MODULE=off
RUN go build -o hello . 
ENTRYPOINT ["/app/hello"]

FROM scratch
COPY --from=build /app/hello .
ENTRYPOINT ["/hello"]