"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var EmailService = /** @class */ (function () {
    function EmailService() {
    }
    EmailService.prototype.sendMail = function (_a) {
        var to = _a.to, message = _a.message;
        console.log("Email sent to " + to.name + ": " + message.subject);
    };
    return EmailService;
}());
exports.default = EmailService;
