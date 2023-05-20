// Bài 1: Quản lý tuyển sinh:
function tag(id){
   var tag= document.getElementById(id).value;
   return tag;
}
document.getElementById('btnKetQua1').onclick=function(){
    // INPUT
    var diemChuan = +tag('diemChuan');
    var khuVuc = tag('khuVuc');
    var doiTuong = tag('doiTuong');
    var diem1 = +tag('diem1');
    var diem2 = +tag('diem2');
    var diem3 = +tag('diem3');
    // OUTPUT

    var diemTongKet = 0;
        diemTongKet = diem1 + diem2 +diem3 +diemKhuVuc(khuVuc) + diemDoiTuong(doiTuong);
    
    var ketQua1 = diemTongKet>=diemChuan && !(diem1==0||diem2==0||diem3==0) ? ketQua1 = 'Bạn đã đậu. <br>' + 'Tổng điểm: ' + diemTongKet : ketQua1 = 'Bạn đã rớt. <br>' + 'Tổng điểm: ' + diemTongKet;
    if (diem1==0||diem2==0||diem3==0){ ketQua1 += '. Do có điểm bằng 0'}
    document.getElementById('ketQua1').innerHTML = ketQua1;
}
function diemKhuVuc(khuVuc) {
    var tongDiem =0;
    switch (khuVuc) {
        case 'A':
            tongDiem += 2;
            break;
        case 'B':
            tongDiem += 1;
            break;
        case 'A':
            tongDiem += 0.5;
            break;
        default:
            break;
    };
    return tongDiem;
}
    function diemDoiTuong(doiTuong){
        var tongDiem =0;
        switch (doiTuong) {
            case '1':
                tongDiem += 2.5;
                break;
            case '2':
                tongDiem += 1.5;
                break;
            case '3':
                tongDiem += 0.5;
                break;
            default:
                break;
        }
        return tongDiem;
    }
// Bài 2: Tính tiền điện
document.getElementById('btnKetQua2').onclick=function(){
    // input:
    var ten = document.getElementById('ten').value;
    var soKw = +document.getElementById('soKw').value;
    // output:

    var tongTienDien= 0;
    
    if(soKw<0){
        alert("số Kw không hợp lệ!");
    }else if (soKw<=50) {
        tongTienDien = Tinh50KwDau(soKw);
    }else if (soKw<=100){
        tongTienDien = Tinh50KwSau(soKw);
    }else if (soKw<=200){
        tongTienDien = Tinh100KwKe(soKw);
    }else if (soKw<=350){
        tongTienDien = Tinh150KwKe(soKw);
    }else if (soKw>350){
        tongTienDien = TinhConLai(soKw);
    }
    ketQua2 =
    document.getElementById('ketQua2').innerHTML =  'Họ và Tên: ' + ten + '. Tiền điện: ' + tongTienDien.toLocaleString() + ' vnđ';
}

function Tinh50KwDau (soKw){
var tongTien = 0;
    tongTien = soKw * 500;
    return tongTien;
}
function Tinh50KwSau (soKw){
var tongTien = 0;
    tongTien = 50 * 500 + (soKw - 50)*650;
    return tongTien;
}
function Tinh100KwKe (soKw){
var tongTien = 0;
    tongTien = 50 * 500 + 50*650 + (soKw - 100)*850;
    return tongTien;
}
function Tinh150KwKe (soKw){
var tongTien = 0;
    tongTien = 50 * 500 + 50*650 + 100*850 + (soKw -200)*1100;
    return tongTien;
}
function TinhConLai (soKw){
var tongTien = 0;
    tongTien = 50 * 500 + 50*650 + 100*850 + 150*1100 + (soKw-350)*1300;
    return tongTien;
}

// Bài 3: Tính tiền thuế
document.getElementById('btnKetQua3').onclick=function(){
    // input:
    var hoTen = document.getElementById('hoTen').value;
    var soTNCN = document.getElementById('soTNCN').value;
    var soNPT = document.getElementById('soNguoiPhuThuoc').value;
    // output:
    var ketQua3 ='';
    var tienThue = 0;
     if(thuNhapChiuThue(soTNCN,soNPT)<=60000000) {
        tienThue = thuNhapChiuThue(soTNCN,soNPT) * 0.05;
    }else if(thuNhapChiuThue(soTNCN,soNPT)<=120000000) {
        tienThue = thuNhapChiuThue(soTNCN,soNPT) * 0.1;
    }else if(thuNhapChiuThue(soTNCN,soNPT)<=210000000) {
        tienThue = thuNhapChiuThue(soTNCN,soNPT) * 0.15;
    }else if(thuNhapChiuThue(soTNCN,soNPT)<=384000000) {
        tienThue = thuNhapChiuThue(soTNCN,soNPT) * 0.2;
    }else if(thuNhapChiuThue(soTNCN,soNPT)<=624000000) {
        tienThue = thuNhapChiuThue(soTNCN,soNPT) * 0.25;
    }else if(thuNhapChiuThue(soTNCN,soNPT)<=960000000) {
        tienThue = thuNhapChiuThue(soTNCN,soNPT) * 0.3;
    }else if(thuNhapChiuThue(soTNCN,soNPT)>960000000) {
        tienThue = thuNhapChiuThue(soTNCN,soNPT) * 0.35;
    }
    if(tienThue<=0 || soNPT<0){
        alert('Dữ liệu nhập không hợp lệ!');
    }else{
        ketQua3 = 'Họ tên: '+ hoTen + '. Tiền thuế thu nhập cá nhân: ' + tienThue.toLocaleString() + ' vnđ';
    }
    document.getElementById('ketQua3').innerHTML = ketQua3;
}
function thuNhapChiuThue(thuNhapNam, soNPT){
    var ketQua = thuNhapNam - 4000000 -  soNPT * 1600000;
    return ketQua;
}

// Bài 4: Tính tiền cáp




document.getElementById('btnKetQua4').onclick=function(){
    // input:
    var khachHang = document.getElementById('loaiKH').value;
    var maKhachHang = document.getElementById('maKH').value;
    var soKenhCaoCap =+document.getElementById('soKenhCaoCap').value;
    
    // output:
    var ketQua4 ='';
    var tienCap ='';
    switch (khachHang) {
        case 'Doanh nghiệp':
            var ketNoi = document.getElementById('ketNoi').value;
            tienCap = doanhNghiep(soKenhCaoCap,ketNoi);
            break;
        case 'chonLoaiKH':
            
        default:
            tienCap = nhaDan(soKenhCaoCap);
            break;
    } 
    if (khachHang=='chonLoaiKH') {
        alert('Hãy chọn loại khách hàng!');
    } else{
    ketQua4 = 'Mã khách hàng: ' + maKhachHang + '. Tiền cáp: ' + new Intl.NumberFormat('en-US', {
        style: 'currency',
        currency: 'USD',}).format(tienCap);
    }
    document.getElementById('ketQua4').innerHTML=ketQua4;
}


function loaiKhachHang() {
    var x = document.getElementById('loaiKH').value;
    var ketQua = ''
    var doanhNghiep ='<div class="col-4"><div class="mb-3"><label for="" class="form-label">Số kết nối:</label><input type="number" name="" id="ketNoi" class="form-control" placeholder=""aria-describedby="helpId"></div></div>'
    if (x == 'Doanh nghiệp') {
        ketQua = doanhNghiep ;
    } 
    document.getElementById('soKetNoi').innerHTML= ketQua;
}

function nhaDan(kenh){
    tienCap = kenh * 7.5 + 25;
    return tienCap;    
}
function doanhNghiep(kenh, ketNoi){
    ketNoi <= 10 ? tienCap = 15 + 75 + kenh*50 :
    tienCap = 15 + 75 + (ketNoi-10)*5 + kenh*50;
    return tienCap;
}
