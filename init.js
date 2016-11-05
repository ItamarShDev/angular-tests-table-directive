angular.module('test', ['TestsTable'])
    .controller("main", ['$scope', function (s) {
        s.tableData = {
            Fedora: [
                {
                    name: "dec10",
                    result: "Fail"
                },
                {
                    name: "dec1",
                    result: "Pass"
                },
                {
                    name: "dec2",
                    result: "Pass"
                },
                {
                    name: "dec3",
                    result: "Pass"
                },
                {
                    name: "dec4",
                    result: "Pass"
                },
                {
                    name: "dec5",
                    result: "Pass"
                },
                {
                    name: "dec6",
                    result: "Pass"
                },
                {
                    name: "dec7",
                    result: "Pass"
                },
                {
                    name: "dec8",
                    result: "Pass"
                }
        	],
            Windows: [
                {
                    name: "dec2",
                    result: "Pass"
                },
                {
                    name: "dec4",
                    result: "Pass"
                },
                {
                    name: "dec14",
                    result: "Fail"
                },
                {
                    name: "dec6",
                    result: "Pass"
                },
                {
                    name: "dec8",
                    result: "Pass"
                }
        	],
            Ubuntu: [
                {
                    name: "dec2",
                    result: "Pass"
                },
                {
                    name: "dec4",
                    result: "Pass"
                },
                {
                    name: "dec6",
                    result: "Pass"
                },
                {
                    name: "dec8",
                    result: "Pass"
                },
                {
                    name: "dec16",
                    result: "Fail"
                }
        	],
            Mac: [
                {
                    name: "dec1",
                    result: "Pass"
                },
                {
                    name: "dec2",
                    result: "Pass"
                },
                {
                    name: "dec3",
                    result: "Pass"
                },
                {
                    name: "dec4",
                    result: "Pass"
                },
                {
                    name: "dec5",
                    result: "Pass"
                },
                {
                    name: "dec6",
                    result: "Pass"
                },
                {
                    name: "dec7",
                    result: "Pass"
                },
                {
                    name: "dec8",
                    result: "Pass"
                },
                {
                    name: "dec9",
                    result: "Pass"
                },
                {
                    name: "dec10",
                    result: "Pass"
                },
                {
                    name: "dec11",
                    result: "Pass"
                },
                {
                    name: "dec12",
                    result: "Pass"
                },
                {
                    name: "dec13",
                    result: "Pass"
                },
                {
                    name: "dec14",
                    result: "Pass"
                },
                {
                    name: "dec15",
                    result: "Pass"
                },
                {
                    name: "dec16",
                    result: "Pass"
                }
        	],
        };
        s.name = "Test";

}]);
