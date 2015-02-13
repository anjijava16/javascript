// In a common variation of the pattern, you can pass arguments to the immediate function that wraps the module.

var MYAPP = MYAPP || {};   // namespace
MYAPP.util = MYAPP.util || {};
MYAPP.util.module = (function (app, global) {
// references to the global object
// and to the global app namespace object // are now localized
}(MYAPP, this));