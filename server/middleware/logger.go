package middleware

import (
	"net/http"
	"time"

	log "github.com/sirupsen/logrus"
)

func Logger(next http.HandlerFunc) http.HandlerFunc {
	log.SetFormatter(&log.TextFormatter{
		FullTimestamp: true,
	})

	return func(w http.ResponseWriter, r *http.Request) {
		start := time.Now()
		defer func() { log.Info(r.URL.Path, time.Since(start)) }()

		next(w, r)
	}
}
