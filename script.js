$(function() {
    // 한글 설정
    $.datepicker.regional['ko'] = {
        closeText: '닫기',
        prevText: '이전달',
        nextText: '다음달',
        currentText: '오늘',
        monthNames: ['1월', '2월', '3월', '4월', '5월', '6월', '7월', '8월', '9월', '10월', '11월', '12월'],
        monthNamesShort: ['1월', '2월', '3월', '4월', '5월', '6월', '7월', '8월', '9월', '10월', '11월', '12월'],
        dayNames: ['일', '월', '화', '수', '목', '금', '토'],
        dayNamesShort: ['일', '월', '화', '수', '목', '금', '토'],
        dayNamesMin: ['일', '월', '화', '수', '목', '금', '토'],
        weekHeader: 'Wk',
        dateFormat: 'yy-mm-dd',
        firstDay: 0,
        isRTL: false,
        showMonthAfterYear: true,
        yearSuffix: '년'
    };

    // 기본 설정 적용
    $.datepicker.setDefaults($.datepicker.regional['ko']);

    // 달력 초기화
    $("#datepicker").datepicker({
        onSelect: function(dateText) {
            let selectedTime = $("input[name='time']:checked").val() === 'morning' ? '오전' : '오후';
            const reserver = $("#reserverName").val();
            $('#selectedDate').text('예약자: ' + reserver + ', 선택된 날짜: ' + dateText + ' ' + selectedTime);
        }
    });

    // 예약 확정 버튼 클릭 시 처리
    $('#confirmBtn').click(function() {
        const selected = $("#selectedDate").text();
        if (selected && $("#reserverName").val()) {
            alert('예약이 확정되었습니다: ' + selected);
        } else {
            alert('이름, 날짜 및 시간을 모두 선택해주세요.');
        }
    });
});
