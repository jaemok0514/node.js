process.argv.forEach(function (item, index) {
    //출력
    console.log(index + ' : ' + typeof (item) + ' : ',item);

    //실행 매개변수에 --exit가 있을 때
    if (item == '--exit') {
        //다음 실행 매개변수를 얻습니다
        var exitTime = Number(process.argv[index + 1]);

        //일정 시간 후 프로그램을 정료
        setTimeout(function () {
            process.exit();
        }, exitTime);
    }
});