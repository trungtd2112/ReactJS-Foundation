import React, { Component } from 'react';

class NewsItem extends Component {
    constructor(props) {
        super(props);

    }

    slug = (str) => {
        // Chuyển hết sang chữ thường
        str = str.toLowerCase();

        // xóa dấu
        str = str.replace(/(à|á|ạ|ả|ã|â|ầ|ấ|ậ|ẩ|ẫ|ă|ằ|ắ|ặ|ẳ|ẵ)/g, 'a');
        str = str.replace(/(è|é|ẹ|ẻ|ẽ|ê|ề|ế|ệ|ể|ễ)/g, 'e');
        str = str.replace(/(ì|í|ị|ỉ|ĩ)/g, 'i');
        str = str.replace(/(ò|ó|ọ|ỏ|õ|ô|ồ|ố|ộ|ổ|ỗ|ơ|ờ|ớ|ợ|ở|ỡ)/g, 'o');
        str = str.replace(/(ù|ú|ụ|ủ|ũ|ư|ừ|ứ|ự|ử|ữ)/g, 'u');
        str = str.replace(/(ỳ|ý|ỵ|ỷ|ỹ)/g, 'y');
        str = str.replace(/(đ)/g, 'd');

        // Xóa ký tự đặc biệt
        str = str.replace(/([^0-9a-z-\s])/g, '');

        // Xóa khoảng trắng thay bằng ký tự -
        str = str.replace(/(\s+)/g, '-');

        // xóa phần dự - ở đầu
        str = str.replace(/^-+/g, '');

        // xóa phần dư - ở cuối
        str = str.replace(/-+$/g, '');

        // return
        return str;
    }

    render() {
        return (
            <div className="col-md-4 mx-auto">
                <div className="card" style={{ width: '18rem' }}>
                    <img classname="card-img-top" src={this.props.anh} alt="Card image cap" />
                    <div className="card-body">
                        <h5 className="card-title">{this.props.tieuDe}</h5>
                        <p className="card-text">{this.props.trichDan}</p>
                        <a href={"/tin-chi-tiet/" + this.slug(this.props.tieuDe)+"."+ this.props.tinID +".html"} className="btn btn-primary">Xem chi tiet</a>
                    </div>
                </div>
            </div>
        );
    }
}

export default NewsItem;