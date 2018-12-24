module.exports = {
    getHomeFooter: () => {
        let data = [
            {cls: "dulich", img: "image/dulich.png", description: "Phiêu lưu du lịch"},
            {cls: "xahoi", img: "image/xahoi.png", description: "Các hoạt động xã hội"},
            {cls: "nghenhac", img: "image/nghenhac.png", description: "Nghe nhạc"},
            {cls: "docsach", img: "image/docsach.png", description: "Đọc sách"}
        ];
        return data;
    },
    getAboutMeFooter: () => {
        let data = [
            {cls: "kinhnghiem", img: "image/kinhnghiem.png", description: "Kinh nghiệm"},
            {cls: "thietkeapp", img: "image/thietkeapp.png", description: "Thiết kế app"},
            {cls: "tkposm", img: "image/tkposm.png", description: "Thiết kế POSM"},
            {cls: "dungvideo", img: "image/dungvideo.png", description: "Dựng video"}
        ];
        return data;
    }
}