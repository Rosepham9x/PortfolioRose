module.exports = {
    getHomeFooter: () => {
        let data = [
            {cls: "dulich app-item-footer", img: "image/dulich.png", description: "Phiêu lưu du lịch"},
            {cls: "xahoi app-item-footer", img: "image/xahoi.png", description: "Các hoạt động xã hội"},
            {cls: "nghenhac app-item-footer", img: "image/nghenhac.png", description: "Nghe nhạc"},
            {cls: "docsach app-item-footer", img: "image/docsach.png", description: "Đọc sách"}
        ];
        return data;
    },
    getAboutMeFooter: () => {
        let data = [
            {cls: "kinhnghiem app-item-footer", img: "image/kinhnghiem.png", description: "Kinh nghiệm"},
            {cls: "thietkeapp app-item-footer", img: "image/thietkeapp.png", description: "Thiết kế app"},
            {cls: "tkposm app-item-footer", img: "image/tkposm.png", description: "Thiết kế POSM"},
            {cls: "dungvideo app-item-footer", img: "image/dungvideo.png", description: "Dựng video"}
        ];
        return data;
    }
}