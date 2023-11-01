import React, { useState } from 'react'
import { TagOutlined, GiftOutlined, CarOutlined } from '@ant-design/icons'
import { SmileOutlined, MehOutlined, FrownOutlined, MehTwoTone } from '@ant-design/icons';
import { Radio } from 'antd';
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
const RadioButton = Radio.Button;
const RadioGroup = Radio.Group;
const ProductDetail = () => {
    const [quantity, setQuantity] = useState(1);

    const handleIncrement = (e: any) => {
        e.preventDefault();
        setQuantity(quantity + 1);
    };

    const handleDecrement = (e: any) => {
        e.preventDefault();
        if (quantity > 1) {
            setQuantity(quantity - 1);
        }
    };
    return <>
        <div className="container max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-7">
            <section className="flex items-center py-8">
                <div className="w-1/2">

                    <Carousel>
                        <div>
                            <img src="https://product.hstatic.net/1000271846/product/z4692401466902_3c305206b327761f12261185be210b53_8610729cabf44d6683f6cd6b0625b4b6_master.jpg" alt="Image 1" />
                        </div>
                        <div>
                            <img src="https://product.hstatic.net/1000271846/product/z4692401466902_3c305206b327761f12261185be210b53_8610729cabf44d6683f6cd6b0625b4b6_master.jpg" alt="Image 2" />
                        </div>
                        <div>
                            <img src="https://product.hstatic.net/1000271846/product/z4692401466902_3c305206b327761f12261185be210b53_8610729cabf44d6683f6cd6b0625b4b6_master.jpg" alt="Image 3" />
                        </div>
                        <div>
                            <img src="https://product.hstatic.net/1000271846/product/z4692401502652_e533b8d0ace59bca063ef07fb47b5742_d228e4fc262e47db89c917aedf4b48fd_master.jpg" alt="Image 3" />
                        </div>
                        {/* Add more images as needed */}
                    </Carousel>
                </div>

                <div className="w-1/2 px-8">
                    <h2 className="text-3xl font-bold mb-4">
                        T-SHIRTS ZOE AUTHENTIC BLACK</h2>

                    <span className="border-t-[1px] border-orange-400 text-xs mb-4 pt-2">MASANPHAM</span>

                    {/* <div className="container mx-auto flex flex-row justify-between pt-5">
                        <div className="w-1/4 flex items-center justify-center">
                            <div className="flex items-center">
                                <GiftOutlined className="text-1xl" />
                                <p className="text-sm ml-2">Branding </p>
                            </div>
                        </div>
                        <div className="w-1/4 flex items-center justify-center">
                            <div className="flex items-center">
                                <CarOutlined className="text-1xl" />
                                <p className="text-sm ml-2">Branding </p>
                            </div>
                        </div>
                        <div className="w-1/4 flex items-center justify-center">
                            <div className="flex items-center">
                                <TagOutlined className="text-1xl" />
                                <p className="text-sm ml-2">Branding </p>
                            </div>
                        </div>
                    </div> */}

                    <h3 className="text-[36px] font-bold mt-4">295,000₫</h3>

                    <div className="container mx-auto  mt-4">
                        <form action="">
                            <p className="text-base mb-1 mt-7">Kích thước</p>
                            <div className="flex items-center justify-start mt-2 mb-5">
                                <RadioGroup defaultValue="M" size="large">
                                    <RadioButton value="M">
                                        <div className="flex items-center">
                                            {/* <SmileOutlined className="text-xl mr-2" /> */}
                                            <span>M</span>
                                        </div>
                                    </RadioButton>
                                    <RadioButton value="L">
                                        <div className="flex items-center">
                                            {/* <MehOutlined className="text-xl mr-2" /> */}
                                            <span>L</span>
                                        </div>
                                    </RadioButton>
                                    <RadioButton value="X">
                                        <div className="flex items-center">
                                            {/* <FrownOutlined className="text-xl mr-2" /> */}
                                            <span>X</span>
                                        </div>
                                    </RadioButton>
                                    <RadioButton value="XL">
                                        <div className="flex items-center">
                                            {/* <MehTwoTone twoToneColor="#eb2f96" className="text-xl mr-2" /> */}
                                            <span>XL</span>
                                        </div>
                                    </RadioButton>
                                </RadioGroup>
                            </div>
                            <p className="text-base mb-1 mt-7">Màu sắc</p>
                            <div className="flex items-center justify-start mt-2 mb-5">
                                <button type="button" className="text-white bg-gradient-to-r from-blue-500 via-blue-600 to-blue-700 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2">Blue</button>
                                <button type="button" className="text-white bg-gradient-to-r from-green-400 via-green-500 to-green-600 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-green-300 dark:focus:ring-green-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2">Green</button>
                                <button type="button" className="focus:outline-none text-white bg-yellow-400 hover:bg-yellow-500 focus:ring-4 focus:ring-yellow-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 dark:focus:ring-yellow-900">Yellow</button>
                                <button type="button" className="focus:outline-none text-white bg-purple-700 hover:bg-purple-800 focus:ring-4 focus:ring-purple-300 font-medium rounded-lg text-sm px-5 py-2.5 mb-2 dark:bg-purple-600 dark:hover:bg-purple-700 dark:focus:ring-purple-900">Purple</button>
                            </div>
                            <div className="flex items-center">

                                <div className="flex items-center gap-1">
                                    <p className="text-base mb-1 pr-3">Số lượng:</p>
                                    <button
                                        className="bg-[#eee] text-[#909090] px-3 py-1 rounded"
                                        onClick={handleDecrement}
                                    >
                                        -
                                    </button>
                                    <input
                                        className="w-16 text-center border border-gray-300 rounded p-2 mx-2 bg-[#eee] text-[#909090]"
                                        type="text"
                                        value={quantity}
                                        readOnly
                                    />
                                    <button
                                        className="bg-[#eee] text-[#909090] px-3 py-1 rounded"
                                        onClick={handleIncrement}
                                    >
                                        +
                                    </button>


                                </div>

                                <button className="ml-4 w-48 bg-black text-white px-4 py-2 border border-gray-500 rounded hover:bg-gray-200 hover:text-black transition duration-300 ease-in-out">
                                    Thêm sản phẩm
                                </button>
                            </div>


                        </form>

                    </div>

                    <div className="product-size-hotline bg-white border rounded-lg p-4 shadow-md mt-4">
                        <div className="product-hotline">
                            <span className='text-[#26bb4e] block text-[14px]'>GỌI ĐỂ MUA HÀNG NHANH HƠN</span>
                            <h4 className='inline text-[24px]'>0931.999.499</h4>
                            <span className="inline-block text-[13px] text-[#757575] font-bold">
                                (8h30 : 18h30)
                            </span>
                        </div>
                        <div className="product-policy">
                            <p className='text-[#26bb4e] block text-[13px] uppercase py-4'>
                                Chính sách bán hàng
                            </p>
                            <ul className="no-bullets">
                                <li className='flex items-center'>
                                    <div className="icon">
                                        <img src="//theme.hstatic.net/1000271846/1001087843/14/pro_policy_icon1.png?v=108" alt="Giao hàng miễn phí" />
                                    </div>
                                    <span className='inline font-bold pl-2'>Giao hàng miễn phí</span>
                                    <span className="block pl-2  text-[13px] text-[#757575]">(Hóa đơn trên 500k)</span>
                                </li>
                                <li className='flex items-center'>
                                    <div className="icon ">
                                        <img src="//theme.hstatic.net/1000271846/1001087843/14/pro_policy_icon2.png?v=108" alt="Đổi trả miễn phí 14 ngày" />
                                    </div>
                                    <span className='inline font-bold pl-2'>Đổi trả miễn phí 14 ngày</span>
                                    <span className="block pl-2  text-[13px] text-[#757575]">(Với mua online)</span>
                                </li>
                                <li className='flex items-center'>
                                    <div className="icon ">
                                        <img src="//theme.hstatic.net/1000271846/1001087843/14/pro_policy_icon3.png?v=108" alt="Thanh toán COD" />
                                    </div>
                                    <span className='inline font-bold pl-2'>Thanh toán COD</span>
                                    <span className="block pl-2  text-[13px] text-[#757575]"> (Hoặc chuyển khoản)</span>
                                </li>
                            </ul>
                        </div>
                    </div>


                </div>
            </section>
        </div>

        <section>
            <div className="mx-auto max-w-screen-xl px-4 sm:px-6  lg:px-8">
                <h1 className='text-[20px] leading-6 border-b-2 pb-2 '>Thông tin sản phẩm</h1>
                <div className="tab-content" id="nav-tabContent">
                    <div className="text-[14px]" id="nav-home" role="tabpanel" aria-labelledby="nav-home-tab">
                        <p className='text-[14px]'><br />Áo Thun của ZOE là một sự kết hợp hoàn hảo giữa phong cách năng động và thoải mái. Được làm từ chất liệu thun gân co giãn, áo mang đến cảm giác êm ái và linh hoạt cho cơ thể. Đường may viền chắc chắn và ấn tượng giúp áo luôn giữ form và tạo điểm nhấn thời trang</p><h3 className='pt-2'><strong>Mô tả sản phẩm:</strong></h3><ul className='grid gap-y-2'><li>Màu sắc: Đen, Xám, Trắng, Be</li><li>Chất liệu: Cotton 100% - 250gsm&nbsp;</li><li>Kích Thước: S, M, L&nbsp;</li><li>Kiểu dáng: Boxy T-shirt&nbsp;</li><li>Thiết kế: Hình in mặt trước áp dụng công nghệ in lụa silicon và logo phía sau áo</li></ul><p className='flex justify-center pt-2'><img src="//file.hstatic.net/1000271846/file/01_120de3ad5b184185b35cab9b9f949973_grande.jpg" /></p><p className='flex justify-center'><img src="//file.hstatic.net/1000271846/file/02_e44e1b57854f40dd8072322c1c38ad42_grande.jpg" /></p><p className='flex justify-center'><img src="//file.hstatic.net/1000271846/file/03_f0769934b7654727a209c4f5f8a17ec0_grande.jpg" /></p><p className='flex justify-center'><img src="//file.hstatic.net/1000271846/file/04_7c8b7aeb8f1346e1a2b5efdf7c066b12_grande.jpg" /></p><p className='flex justify-center'><img src="//file.hstatic.net/1000271846/file/05_37486c7cb6b24dd499cd84eb1727eff2_grande.jpg" /></p><p className='flex justify-center'><img src="//file.hstatic.net/1000271846/file/06_0e8793f62f444c05b4ff7e1949026740_grande.jpg" /></p><h2 className='pt-2 '><strong>Hướng dẫn chọn size:</strong></h2><ul className='grid gap-y-2'><li>Size S:&nbsp;Cân nặng 50 - 60kg; Dài áo: 67 cm; Ngang vai: 43cm; Ngang thân: 51cm; Dài tay: 21 cm</li><li>Size M: Cân nặng 61 - 70kg;&nbsp; Dài áo: 69&nbsp;cm; Ngang vai: 45cm; Ngang thân: 53cm; Dài tay: 22,5&nbsp;cm</li><li><em>Size L: Cân nặng 71 - 80kg; Dài áo: 71 cm; Ngang vai: 47 cm; Ngang thân: 55cm; Dài tay: 24&nbsp;cm <p className='flex justify-center'><img src="//file.hstatic.net/1000271846/file/size_chart_ao_4098ff74b35a4ce086a7092673d30901_grande.jpg" /></p><p className='text-center'>Bảng size chart áp dụng các dòng T-Shirts của ZOE</p></em></li></ul><h2 className='pt-2'><strong>Hướng dẫn giặt:</strong></h2><ul className='grid gap-y-2'><li>Không ngâm chung với sản phẩm có màu khác vì có nguy cơ bị lem màu.&nbsp;</li><li>Phải giặt tay riêng bằng chất tẩy rửa trung tính ở nhiệt độ thấp dưới 30 độ</li><li>Phơi khô trong bóng râm.</li><li>Sử dụng nhiệt độ thấp khi ủi (không bao giờ ủi phần in)</li></ul><h3 className='pt-2'><strong>Chính sách đổi hàng và bảo hành sản phẩm:</strong></h3><ul className='grid gap-y-2'><li><p>Chấp nhận đổi hàng trong các trường hợp hàng bị lỗi, không đúng mẫu, không vừa size</p></li><li><p>Hỗ trợ đổi size và đổi mẫu trong vòng 15 ngày kể từ khi nhận sản phẩm.</p></li><li><p>Hỗ trợ phí vận chuyển để khách hàng đổi sản phẩm mới nếu vì lý do lỗi kỹ thuật</p></li></ul>
                    </div>

                    <div className="tab-pane fade text-[14px] grid gap-y-2 pt-3" id="nav-profile" role="tabpanel" aria-labelledby="nav-profile-tab">
                        <p><strong>HOTLINE bộ phận bán hàng Online:&nbsp;0931 999 499</strong><br />Bước 1:&nbsp;Lựa chọn sản phẩm</p><ul ><li>Click chọn vào “Danh sách&nbsp;sản phẩm” để lựa chọn sản phẩm.</li><li>Sử dụng chức năng tìm kiếm sản phẩm để tìm nhanh sản phẩm theo ý thích, vui lòng nhập thông tin vào ô “Tìm kiếm sản phẩm” bên trái.</li></ul><p>Bước 2:&nbsp;Quyết định đặt hàng trực tuyến Chọn biểu tượng “Giỏ hàng” tại danh sách liệt kê tất cả sản phẩm hoặc biểu tượng “Đặt hàng” trong chi tiết sản phẩm.</p><p>Bước 3:&nbsp;Cập nhật thông tin giỏ hàng</p><ul className='grid gap-y'><li>Lựa chọn sản phẩm cần mua</li><li>Chọn biểu tượng “Xóa” bên phải nếu muốn bỏ sản phẩm đó khỏi giỏ hàng.</li><li>Chọn “Tiếp tục mua” khi muốn chọn thêm sản phẩm khác đưa vào giỏ hàng.</li><li>Chọn “Cập nhật giỏ hàng” để chốt và biết tổng giá trị giỏ hàng.</li><li>“Xác nhận” khi bạn đã hoàn tất việc chọn và đặt&nbsp;hàng để đến bước tiếp theo.</li></ul><p>Bước 4:&nbsp;Xác nhận đơn hàng.</p><ul><li>Đơn hàng hoàn chỉnh hiển thị toàn bộ thông tin sản phẩm, mã sản phẩm đã được chọn và tổng giá trị đơn hàng.</li></ul><p>Quý khách vui lòng cung cấp đầy đủ thông tin liên hệ để <strong>chúng tôi</strong>&nbsp;tiện liên lạc và gửi thông báo xác nhận đơn hàng.</p><p>Bước 5:&nbsp;Hoàn tất việc đặt hàng<br />Khi quý khách chọn “Xác nhận”, thông tin đặt hàng đã được gửi đến ban quản trị web.&nbsp;Trong 24h chúng tôi&nbsp;sẽ gửi email và liên lạc qua điện thoại để xác nhận lại đơn hàng (ngoại trừ ngày lễ – tết).</p>
                    </div>


                    <div className="tab-pane fade" id="nav-contact" role="tabpanel" aria-labelledby="nav-contact-tab">

                    </div>



                </div>
            </div>

        </section>
        {/* SAN PHAM KHAC */}
        <section>
            <div className="mx-auto max-w-screen-xl px-4  sm:px-6 sm:py-12 lg:px-8">
                <header>
                    <h2 className="text-xl font-bold text-gray-900 sm:text-3xl">
                        Sản Phẩm Khác
                    </h2>
                </header>

                <div className="mt-8 block lg:hidden">
                    <button
                        className="flex cursor-pointer items-center gap-2 border-b border-gray-400 pb-1 text-gray-900 transition hover:border-gray-600"
                    >
                        <span className="text-sm font-medium"> Filters & Sorting </span>

                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            fill="none"
                            viewBox="0 0 24 24"
                            strokeWidth="1.5"
                            stroke="currentColor"
                            className="h-4 w-4 rtl:rotate-180"
                        >
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                d="M8.25 4.5l7.5 7.5-7.5 7.5"
                            />
                        </svg>
                    </button>
                </div>

                <div className="mt-4 lg:mt-8 lg:grid lg:grid-cols-4 lg:items-start lg:gap-8">
                    <div className="hidden space-y-4 lg:block">
                        <div>
                            <label htmlFor="SortBy" className="block text-[16px] font-bold text-gray-700">
                                Sắp xếp theo
                            </label>

                            <select id="SortBy" className="mt-1 rounded border-gray-300 text-sm p-2">
                                <option>Sắp xếp</option>
                                <option value="Title, DESC">Tiêu đề, Z-A</option>
                                <option value="Title, ASC">Tiêu đề, A-Z</option>
                                <option value="Price, DESC">Giá, giảm dần</option>
                                <option value="Price, ASC">Giá, Tăng dần</option>
                            </select>
                        </div>

                        <div>
                            <p className="block text-[16px] font-bold text-gray-700">Lọc</p>

                            <div className="mt-1 space-y-2">
                                {/* <details
                                    className="overflow-hidden rounded border border-gray-300 [&_summary::-webkit-details-marker]:hidden"
                                >
                                    <summary
                                        className="flex cursor-pointer items-center justify-between gap-2 p-4 text-gray-900 transition"
                                    >
                                        <span className="text-sm font-medium"> Availability </span>

                                        <span className="transition group-open:-rotate-180">
                                            <svg
                                                xmlns="http://www.w3.org/2000/svg"
                                                fill="none"
                                                viewBox="0 0 24 24"
                                                strokeWidth="1.5"
                                                stroke="currentColor"
                                                className="h-4 w-4"
                                            >
                                                <path
                                                    strokeLinecap="round"
                                                    strokeLinejoin="round"
                                                    d="M19.5 8.25l-7.5 7.5-7.5-7.5"
                                                />
                                            </svg>
                                        </span>
                                    </summary>

                                    <div className="border-t border-gray-200 bg-white">
                                        <header className="flex items-center justify-between p-4">
                                            <span className="text-sm text-gray-700"> 0 Selected </span>

                                            <button
                                                type="button"
                                                className="text-sm text-gray-900 underline underline-offset-4"
                                            >
                                                Reset
                                            </button>
                                        </header>

                                        <ul className="space-y-1 border-t border-gray-200 p-4">
                                            <li>
                                                <label
                                                    htmlFor="FilterInStock"
                                                    className="inline-flex items-center gap-2"
                                                >
                                                    <input
                                                        type="checkbox"
                                                        id="FilterInStock"
                                                        className="h-5 w-5 rounded border-gray-300"
                                                    />

                                                    <span className="text-sm font-medium text-gray-700">
                                                        In Stock (5+)
                                                    </span>
                                                </label>
                                            </li>

                                            <li>
                                                <label
                                                    htmlFor="FilterPreOrder"
                                                    className="inline-flex items-center gap-2"
                                                >
                                                    <input
                                                        type="checkbox"
                                                        id="FilterPreOrder"
                                                        className="h-5 w-5 rounded border-gray-300"
                                                    />

                                                    <span className="text-sm font-medium text-gray-700">
                                                        Pre Order (3+)
                                                    </span>
                                                </label>
                                            </li>

                                            <li>
                                                <label
                                                    htmlFor="FilterOutOfStock"
                                                    className="inline-flex items-center gap-2"
                                                >
                                                    <input
                                                        type="checkbox"
                                                        id="FilterOutOfStock"
                                                        className="h-5 w-5 rounded border-gray-300"
                                                    />

                                                    <span className="text-sm font-medium text-gray-700">
                                                        Out of Stock (10+)
                                                    </span>
                                                </label>
                                            </li>
                                        </ul>
                                    </div>
                                </details> */}

                                <details
                                    className="overflow-hidden rounded border border-gray-300 [&_summary::-webkit-details-marker]:hidden"
                                >
                                    <summary
                                        className="flex cursor-pointer items-center justify-between gap-2 p-4 text-gray-900 transition"
                                    >
                                        <span className="text-sm font-medium"> Giá tiền </span>

                                        <span className="transition group-open:-rotate-180">
                                            <svg
                                                xmlns="http://www.w3.org/2000/svg"
                                                fill="none"
                                                viewBox="0 0 24 24"
                                                strokeWidth="1.5"
                                                stroke="currentColor"
                                                className="h-4 w-4"
                                            >
                                                <path
                                                    strokeLinecap="round"
                                                    strokeLinejoin="round"
                                                    d="M19.5 8.25l-7.5 7.5-7.5-7.5"
                                                />
                                            </svg>
                                        </span>
                                    </summary>

                                    <div className="border-t border-gray-200 bg-white">
                                        {/* <header className="flex items-center justify-between p-4">
                                            <span className="text-sm text-gray-700">
                                                The highest price is $600
                                            </span>

                                            <button
                                                type="button"
                                                className="text-sm text-gray-900 underline underline-offset-4"
                                            >
                                                Reset
                                            </button>
                                        </header> */}

                                        <div className="border-t border-gray-200 p-4">
                                            <div className="flex justify-between gap-4">
                                                <label
                                                    htmlFor="FilterPriceFrom"
                                                    className="flex items-center gap-2"
                                                >
                                                    <span className="text-sm text-gray-600">$</span>

                                                    <input
                                                        type="number"
                                                        id="FilterPriceFrom"
                                                        placeholder="From"
                                                        className="w-full rounded-md border-gray-200 shadow-sm sm:text-sm"
                                                    />
                                                </label>

                                                <label htmlFor="FilterPriceTo" className="flex items-center gap-2">
                                                    <span className="text-sm text-gray-600">$</span>

                                                    <input
                                                        type="number"
                                                        id="FilterPriceTo"
                                                        placeholder="To"
                                                        className="w-full rounded-md border-gray-200 shadow-sm sm:text-sm"
                                                    />
                                                </label>
                                            </div>
                                        </div>
                                    </div>
                                </details>

                                <details
                                    className="overflow-hidden rounded border border-gray-300 [&_summary::-webkit-details-marker]:hidden"
                                >
                                    <summary
                                        className="flex cursor-pointer items-center justify-between gap-2 p-4 text-gray-900 transition"
                                    >
                                        <span className="text-sm font-medium"> Màu sắc </span>

                                        <span className="transition group-open:-rotate-180">
                                            <svg
                                                xmlns="http://www.w3.org/2000/svg"
                                                fill="none"
                                                viewBox="0 0 24 24"
                                                strokeWidth="1.5"
                                                stroke="currentColor"
                                                className="h-4 w-4"
                                            >
                                                <path
                                                    strokeLinecap="round"
                                                    strokeLinejoin="round"
                                                    d="M19.5 8.25l-7.5 7.5-7.5-7.5"
                                                />
                                            </svg>
                                        </span>
                                    </summary>

                                    <div className="border-t border-gray-200 bg-white">
                                        <header className="flex items-center justify-between p-4">
                                            <span className="text-sm text-gray-700"> 0 Lựa chọn </span>

                                            <button
                                                type="button"
                                                className="text-sm text-gray-900 underline underline-offset-4"
                                            >
                                                Đặt lại
                                            </button>
                                        </header>

                                        <ul className="space-y-1 border-t border-gray-200 p-4">
                                            <li>
                                                <label
                                                    htmlFor="FilterRed"
                                                    className="inline-flex items-center gap-2"
                                                >
                                                    <input
                                                        type="checkbox"
                                                        id="FilterRed"
                                                        className="h-5 w-5 rounded border-gray-300"
                                                    />

                                                    <span className="text-sm font-medium text-gray-700">
                                                        Red
                                                    </span>
                                                </label>
                                            </li>

                                            <li>
                                                <label
                                                    htmlFor="FilterBlue"
                                                    className="inline-flex items-center gap-2"
                                                >
                                                    <input
                                                        type="checkbox"
                                                        id="FilterBlue"
                                                        className="h-5 w-5 rounded border-gray-300"
                                                    />

                                                    <span className="text-sm font-medium text-gray-700">
                                                        Blue
                                                    </span>
                                                </label>
                                            </li>

                                            <li>
                                                <label
                                                    htmlFor="FilterGreen"
                                                    className="inline-flex items-center gap-2"
                                                >
                                                    <input
                                                        type="checkbox"
                                                        id="FilterGreen"
                                                        className="h-5 w-5 rounded border-gray-300"
                                                    />

                                                    <span className="text-sm font-medium text-gray-700">
                                                        Green
                                                    </span>
                                                </label>
                                            </li>

                                            <li>
                                                <label
                                                    htmlFor="FilterOrange"
                                                    className="inline-flex items-center gap-2"
                                                >
                                                    <input
                                                        type="checkbox"
                                                        id="FilterOrange"
                                                        className="h-5 w-5 rounded border-gray-300"
                                                    />

                                                    <span className="text-sm font-medium text-gray-700">
                                                        Orange
                                                    </span>
                                                </label>
                                            </li>

                                            <li>
                                                <label
                                                    htmlFor="FilterPurple"
                                                    className="inline-flex items-center gap-2"
                                                >
                                                    <input
                                                        type="checkbox"
                                                        id="FilterPurple"
                                                        className="h-5 w-5 rounded border-gray-300"
                                                    />

                                                    <span className="text-sm font-medium text-gray-700">
                                                        Purple
                                                    </span>
                                                </label>
                                            </li>

                                            <li>
                                                <label
                                                    htmlFor="FilterTeal"
                                                    className="inline-flex items-center gap-2"
                                                >
                                                    <input
                                                        type="checkbox"
                                                        id="FilterTeal"
                                                        className="h-5 w-5 rounded border-gray-300"
                                                    />

                                                    <span className="text-sm font-medium text-gray-700">
                                                        Teal
                                                    </span>
                                                </label>
                                            </li>
                                        </ul>
                                    </div>
                                </details>
                            </div>
                        </div>
                    </div>

                    <div className="lg:col-span-3">
                        <ul className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
                            <li>
                                <a href="#" className="group block overflow-hidden">
                                    <img
                                        src="https://product.hstatic.net/1000271846/product/01_01b8aa60523745859a836b0e604f1fe2_master.jpg"
                                        alt=""
                                        className="h-[350px] w-full object-cover transition duration-500 group-hover:scale-105 sm:h-[450px]"
                                    />

                                    <div className="relative bg-white pt-3">
                                        <h3
                                            className="text-xs text-gray-700 group-hover:underline group-hover:underline-offset-4"
                                        >
                                            Áo Número
                                        </h3>

                                        <p className="mt-2">
                                            <span className="sr-only"> Regular Price </span>

                                            <span className="tracking-wider text-gray-900"> 275,000₫ </span>
                                        </p>
                                    </div>
                                </a>
                            </li>

                            <li>
                                <a href="#" className="group block overflow-hidden">
                                    <img
                                        src="https://product.hstatic.net/1000271846/product/01_01b8aa60523745859a836b0e604f1fe2_master.jpg"
                                        alt=""
                                        className="h-[350px] w-full object-cover transition duration-500 group-hover:scale-105 sm:h-[450px]"
                                    />

                                    <div className="relative bg-white pt-3">
                                        <h3
                                            className="text-xs text-gray-700 group-hover:underline group-hover:underline-offset-4"
                                        >
                                            Áo Número
                                        </h3>

                                        <p className="mt-2">
                                            <span className="sr-only"> Regular Price </span>

                                            <span className="tracking-wider text-gray-900"> 275,000₫ </span>
                                        </p>
                                    </div>
                                </a>
                            </li>

                            <li>
                                <a href="#" className="group block overflow-hidden">
                                    <img
                                        src="https://product.hstatic.net/1000271846/product/01_01b8aa60523745859a836b0e604f1fe2_master.jpg"
                                        alt=""
                                        className="h-[350px] w-full object-cover transition duration-500 group-hover:scale-105 sm:h-[450px]"
                                    />

                                    <div className="relative bg-white pt-3">
                                        <h3
                                            className="text-xs text-gray-700 group-hover:underline group-hover:underline-offset-4"
                                        >
                                            Áo Número
                                        </h3>

                                        <p className="mt-2">
                                            <span className="sr-only"> Regular Price </span>

                                            <span className="tracking-wider text-gray-900"> 275,000₫ </span>
                                        </p>
                                    </div>
                                </a>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </section>


    </>
}

export default ProductDetail