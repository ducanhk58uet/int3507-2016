"use strict";
/**
 * Created by Thinking on 09/14/2016.
 */
var User = (function () {
    function User(_id, userName, userPass, userHashPass, userPhone, userAddress) {
        this._id = _id;
        this.userName = userName;
        this.userPass = userPass;
        this.userHashPass = userHashPass;
        this.userPhone = userPhone;
        this.userAddress = userAddress;
    }
    return User;
}());
exports.User = User;
//# sourceMappingURL=user.model.js.map