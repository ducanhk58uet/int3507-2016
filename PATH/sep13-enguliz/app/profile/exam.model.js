"use strict";
/**
 * Created by Thinking on 10/31/2016.
 */
var Exam = (function () {
    function Exam(_id, time, createdDate, unitTitle, unitType, point, answer) {
        this._id = _id;
        this.time = time;
        this.createdDate = createdDate;
        this.unitTitle = unitTitle;
        this.unitType = unitType;
        this.point = point;
        this.answer = answer;
    }
    return Exam;
}());
exports.Exam = Exam;
var Ans = (function () {
    function Ans(ansId, answer) {
        this.ansId = ansId;
        this.answer = answer;
    }
    return Ans;
}());
exports.Ans = Ans;
//# sourceMappingURL=exam.model.js.map