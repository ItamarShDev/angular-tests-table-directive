angular.module("TestsTable", [])
    .directive('fullTable', function () {
        return {
            scope: {
                mainColName: '=',
                tableData: "="
            },
            bindToController: true,
            controller: function () {
                this.headers = [];
                this.getHeaders = function () {
                    this.headers = [];
                    var maxLength = -1;
                    var indexKey = "";
                    for (var key in this.tableData) {
                        // skip loop if the property is from prototype
                        if (!this.tableData.hasOwnProperty(key)) continue;

                        var obj = this.tableData[key];
                        if (obj.length > maxLength) {
                            maxLength = obj.length;
                            indexKey = key;
                        }
                    }
                    var arr = this.tableData[key];
                    for (var obj in arr) {
                        this.headers.push(arr[obj].name)
                    }
                }
                this.getProperty = function (arr, key) {
                    for (objIndex in arr) {
                        var obj = arr[objIndex];
                        if (obj.name === key)
                            return obj.result;
                    }
                }
            },
            controllerAs: 'ctrl',
            template: '<table ng-if="ctrl.mainColName&&ctrl.tableData" ng-init="ctrl.getHeaders()"><tr><th>{{ctrl.mainColName}}</th><th ng-repeat="header in ctrl.headers">{{header}}</th></tr><tr ng-repeat="(key, name) in ctrl.tableData"><td>{{key}}</td><td ng-repeat="header in ctrl.headers">{{ctrl.getProperty(name, header)}}</td></tr></table>',
            bindToController: true

        }
    });
