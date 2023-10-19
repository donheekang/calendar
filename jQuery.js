// 파일 업로드 버튼 클릭 시 처리
$('#uploadButton').click(function() {
    const selected = $("#selectedDate").text();
    const reserver = $("#reserverName").val();

    if (selected && reserver) {
        const fileInput = document.getElementById('fileInput');
        const file = fileInput.files[0];

        if (file) {
            // AWS 설정 및 인증
            AWS.config.update({
                accessKeyId: 'AKIAXFCFXMR26ZW3L2V4',
                secretAccessKey: 'rLWHkQ+K96q/ilGj3qSVKouSTPe0eAvmxJVt5pJ',
                region: 'ap-northeast-2'
            });

            // S3 객체 생성
            const s3 = new AWS.S3();

            const params = {
                Bucket: 'donheekang-github-io-calendar',
                Key: 'folder/' + file.name, // 업로드할 경로 및 파일 이름
                Body: file
            };

            s3.upload(params, (err, data) => {
                if (err) {
                    console.error('파일 업로드 실패:', err);
                    alert('파일 업로드 실패');
                } else {
                    console.log('파일 업로드 성공:', data.Location);
                    alert('예약이 확정되었습니다: ' + selected + '\n파일 업로드 성공!\n' + data.Location);
                }
            });
        } else {
            alert('파일을 선택해주세요.');
        }
    } else {
        alert('이름, 날짜, 파일을 모두 선택해주세요.');
    }
});
