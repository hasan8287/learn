package route

import (
	"net/http"

	"app/controller"
	hr "app/route/middleware/httprouterwrapper"

	"github.com/julienschmidt/httprouter"
	"github.com/justinas/alice"
)

// Load returns the routes and middleware
func Load() http.Handler {
	return middleware(routes())
}

// LoadHTTPS returns the HTTP routes and middleware
func LoadHTTPS() http.Handler {
	return middleware(routes())
}

// LoadHTTP returns the HTTPS routes and middleware
func LoadHTTP() http.Handler {
	return middleware(routes())

	// Uncomment this and comment out the line above to always redirect to HTTPS
	//return http.HandlerFunc(redirectToHTTPS)
}

// Optional method to make it easy to redirect from HTTP to HTTPS
func redirectToHTTPS(w http.ResponseWriter, req *http.Request) {
	http.Redirect(w, req, "https://"+req.Host, http.StatusMovedPermanently)
}

// *****************************************************************************
// Routes
// *****************************************************************************

func routes() *httprouter.Router {
	r := httprouter.New()

	// Set 404 handler
	r.NotFound = alice.
		New().
		ThenFunc(controller.Error404)

	// Home
	r.GET("/", hr.Handler(alice.
		New().
		ThenFunc(controller.IndexGET)))

	// Category List
	r.GET("/category", hr.Handler(alice.
		New().
		ThenFunc(controller.CategoryGet)))

	r.GET("/category/:id", hr.Handler(alice.
		New().
		ThenFunc(controller.CategoryGetOne)))

	r.POST("/category", hr.Handler(alice.
		New().
		ThenFunc(controller.CategoryPost)))

	r.DELETE("/category/:id", hr.Handler(alice.
		New().
		ThenFunc(controller.CategoryDelete)))

	r.PUT("/category/:id", hr.Handler(alice.
		New().
		ThenFunc(controller.CategoryUpdate)))

	r.GET("/article", hr.Handler(alice.
		New().
		ThenFunc(controller.ArticleGet)))

	r.GET("/article/:id", hr.Handler(alice.
		New().
		ThenFunc(controller.ArticleGetOne)))

	r.POST("/article", hr.Handler(alice.
		New().
		ThenFunc(controller.ArticlePost)))

	return r
}

// *****************************************************************************
// Middleware
// *****************************************************************************

func middleware(h http.Handler) http.Handler {

	// TODO: FOR PERMISSIONS
	// Prevents CSRF and Double Submits
	// cs := csrfbanana.New(h, session.Store, session.Name)
	// cs.FailureHandler(http.HandlerFunc(controller.InvalidToken))
	// cs.ClearAfterUsage(true)
	// cs.ExcludeRegexPaths([]string{"/static(.*)"})
	// csrfbanana.TokenLength = 32
	// csrfbanana.TokenName = "token"
	// csrfbanana.SingleToken = false
	// h = cs

	// // Log every request
	// h = logrequest.Handler(h)

	// // Clear handler for Gorilla Context
	// h = context.ClearHandler(h)

	return h
}
