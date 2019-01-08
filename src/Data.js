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
            {cls: "kinhnghiem app-item-footer", img: "image/kinhnghiem.png", description: "Kinh nghiệm - 03 năm"},
            {cls: "thietkeapp app-item-footer", img: "image/thietkeapp.png", description: "Thiết kế app - Hơn 01 năm"},
            {cls: "tkposm app-item-footer", img: "image/tkposm.png", description: "Thiết kế POSM - 02 năm"},
            {cls: "dungvideo app-item-footer", img: "image/dungvideo.png", description: "Dựng video - 04 video"}
        ];
        return data;
    }
}