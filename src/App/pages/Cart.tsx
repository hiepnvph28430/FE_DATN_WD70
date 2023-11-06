import React from 'react'

const Cart = () => {
    return (
        <div className="wrapper-cart-detail">
            <div className="container">
                <div className="heading-page">
                    <div className="header-page">
                        <h1>Giỏ hàng của bạn</h1>
                        <p className="count-cart">Có <span>2 sản phẩm</span> trong giỏ hàng</p>
                    </div>
                </div>
                <div className="row wrapbox-content-cart">
                    <div className="col-12 contentCart-detail">

                        <div className="cart-container">
                            <div className="cart-col-left">
                                <div className="main-content-cart">
                                    <form action="/cart" method="post" id="cartformpage">
                                        <div className="row">
                                            <div className="col-md-12 col-sm-12 col-xs-12">
                                                <table className="table-cart">
                                                    <thead>
                                                        <tr>
                                                            <th className="image">&nbsp;</th>
                                                            <th className="item">Tên sản phẩm</th>
                                                            <th className="item">Giá</th>
                                                            <th className="item">Số lượng</th>
                                                            <th className="item">Thành tiền</th>
                                                            <th className="remove">&nbsp;</th>
                                                        </tr>
                                                    </thead>
                                                    <tbody>



                                                        <tr className="line-item-container" data-variant-id="1112720164">
                                                            <td className="image">
                                                                <div className="product_image">
                                                                    <a href="/products/ao-t-shirts-zoe-logo-nho-black">
                                                                        <img src="  //product.hstatic.net/1000271846/product/01_ca621a7fa32e4029b8b5ba6850ec2782_medium.png" alt="Áo T-Shirts ZOE Logo nhỏ Black" />
                                                                    </a>

                                                                </div>
                                                            </td>
                                                            <td className="item" width="420px">

                                                                <h3><a href="/products/ao-t-shirts-zoe-logo-nho-black">Áo T-Shirts ZOE Logo nhỏ Black </a></h3>


                                                                <p className="variant">

                                                                    <span className="variant_title">S / Black</span>

                                                                </p>

                                                                <p>

                                                                </p>


                                                            </td>
                                                            <td className="item">
                                                                <p>
                                                                    <span className="price">275,000₫</span>

                                                                </p></td>
                                                            <td className="qty">
                                                                <div className="qty quantity-partent qty-click clearfix">
                                                                    <button type="button" className="qtyminus qty-btn">-</button>			<input type="text" size={4} name="updates[]" min="1" id="updates_1112720164" data-price="27500000" value="2" className="tc line-item-qty item-quantity bg-white" />
                                                                    <button type="button" className="qtyplus qty-btn">+</button>															</div>
                                                            </td>
                                                            <td className="item">
                                                                <p className="">
                                                                    <span className="line-item-total price"><span className="d-md-none">Thành tiền: </span>550,000₫</span>
                                                                </p>
                                                            </td>
                                                            <td className="remove">
                                                                <a href="/cart/change?line=1&amp;quantity=0" className="cart">
                                                                    <img src="//theme.hstatic.net/1000271846/1001087843/14/ic_close.png?v=108" /></a>
                                                            </td>
                                                        </tr>

                                                    </tbody>
                                                </table>
                                            </div>
                                        </div>
                                        <div className="row">
                                            <div className="col-12 col-md-5 col-lg-7">
                                                <div className="sidebox-group">
                                                    <h3>Ghi chú đơn hàng</h3>
                                                    <div className="checkout-note clearfix">
                                                        <textarea id="note" name="note" rows={4} placeholder="Ghi chú"></textarea>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="col-12 col-md-7 col-lg-5">
                                                <div className="sidebox-order">
                                                    <div className="sidebox-order-inner">
                                                        <div className="sidebox-order_title">
                                                            <h3>Thông tin đơn hàng</h3>
                                                        </div>
                                                        <div className="sidebox-order_total">
                                                            <p>Tổng tiền:
                                                                <span className="total-price">550,000₫</span>
                                                            </p>
                                                        </div>
                                                        <div className="sidebox-order_text">
                                                            <p>Phí vận chuyển sẽ được tính ở trang thanh toán.<br />
                                                                Bạn cũng có thể nhập mã giảm giá ở trang thanh toán.</p>
                                                        </div>
                                                        <div className="sidebox-order_action">
                                                            <a className="btn btn-dark btncart-checkout">THANH TOÁN</a>
                                                            <p className="link-continue">
                                                                <a href="/collections/all">
                                                                    <i className="fa fa-reply"></i> Tiếp tục mua hàng
                                                                </a>
                                                            </p>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="cart-buttons hidden">
                                                    <button type="submit" id="update-cart" className="btn-update button dark hidden" name="update" value="">Cập nhật</button>
                                                    <button type="submit" id="checkout" className="btn-checkout button dark hidden" name="checkout" value="">Thanh toán</button>
                                                </div>

                                            </div>
                                        </div>
                                    </form>
                                </div>
                            </div>
                        </div>

                        {/* <!-- End cart --> */}
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Cart