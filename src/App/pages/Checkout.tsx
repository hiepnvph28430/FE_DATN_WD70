import React, { useState } from 'react'
import Visa from '../../Image/Visa.jpg'
import advance from '../../Image/Advance.jpg'
import ideal from '../../Image/ideal.jpg'
import maestro from '../../Image/Maestro.jpg'
import mastercard from '../../Image/MasterCard.jpg'
const Checkout = () => {

    const [formData, setFormData] = useState({
        name: '',
        email: '',
        phone: '',
        address: '',
    });

    const handleChange = (e: any) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
    };

    const handleSubmit = (e: any) => {
        e.preventDefault();
        // Xử lý dữ liệu gửi đi ở đây
        console.log(formData);
    };

    const [quantity, setQuantity] = useState(1);

    const increaseQuantity = () => {
        setQuantity(quantity + 1);
    };

    const decreaseQuantity = () => {
        if (quantity > 1) {
            setQuantity(quantity - 1);
        }
    };
    return (
        <div className='container max-w-7xl mx-auto my-10'>
            <div className='flex justify-between'>
                {/* left */}
                <div className='w-[45%] '>
                    {/* 1 */}
                    <div className=' my-5'>
                        <div className='flex '>
                            <div className='flex items-center'>
                                <div className='w-[25%]'>
                                    <img src='https://product.hstatic.net/1000271846/product/z4692401466902_3c305206b327761f12261185be210b53_8610729cabf44d6683f6cd6b0625b4b6_master.jpg' alt="" />
                                </div>
                                <div className='px-6 mr-2'>
                                    <p> T-SHIRTS ZOE AUTHENTIC BLACK</p>
                                    <button className='text-red-400' type='submit'>Remove</button>
                                </div>
                            </div>
                            <div className=' grid justify-items-center items-center self-center'>
                                <div className='flex items-center'>
                                    <button
                                        onClick={decreaseQuantity}
                                        className="text-3xl w-10    flex items-center justify-center hover:bg-gray-300"
                                    >
                                        -
                                    </button>
                                    <input
                                        type="text"
                                        value={quantity}
                                        readOnly
                                        onChange={(e) => setQuantity(parseInt(e.target.value, 10))}
                                        className="w-full border border-gray-300 rounded-md text-center"
                                    />
                                    <button
                                        onClick={increaseQuantity}
                                        className="text-3xl w-10 flex  items-center  justify-center hover:bg-gray-300"
                                    >
                                        +
                                    </button>

                                </div>
                                <p className='px-2 pt-2'>€3.90</p>
                            </div>
                        </div>
                    </div>
                    {/* 2 */}
                    <div className=' my-5'>
                        <div className='flex '>
                            <div className='flex items-center'>
                                <div className='w-[25%]'>
                                    <img src='https://product.hstatic.net/1000271846/product/z4692401466902_3c305206b327761f12261185be210b53_8610729cabf44d6683f6cd6b0625b4b6_master.jpg' alt="" />
                                </div>
                                <div className='px-6 mr-2'>
                                    <p> T-SHIRTS ZOE AUTHENTIC BLACK</p>
                                    <button className='text-red-400' type='submit'>Remove</button>
                                </div>
                            </div>
                            <div className=' grid justify-items-center items-center self-center'>
                                <div className='flex items-center'>
                                    <button
                                        onClick={decreaseQuantity}
                                        className="text-3xl w-10    flex items-center justify-center hover:bg-gray-300"
                                    >
                                        -
                                    </button>
                                    <input
                                        type="text"
                                        value={quantity}
                                        readOnly
                                        onChange={(e) => setQuantity(parseInt(e.target.value, 10))}
                                        className="w-full border border-gray-300 rounded-md text-center"
                                    />
                                    <button
                                        onClick={increaseQuantity}
                                        className="text-3xl w-10 flex  items-center  justify-center hover:bg-gray-300"
                                    >
                                        +
                                    </button>

                                </div>
                                <p className='px-2 pt-2'>€3.90</p>
                            </div>
                        </div>
                    </div>
                    {/* 3 */}
                    <div className=' my-5'>
                        <div className='flex '>
                            <div className='flex items-center'>
                                <div className='w-[25%]'>
                                    <img src='https://product.hstatic.net/1000271846/product/z4692401466902_3c305206b327761f12261185be210b53_8610729cabf44d6683f6cd6b0625b4b6_master.jpg' alt="" />
                                </div>
                                <div className='px-6 mr-2'>
                                    <p> T-SHIRTS ZOE AUTHENTIC BLACK</p>
                                    <button className='text-red-400' type='submit'>Remove</button>
                                </div>
                            </div>
                            <div className=' grid justify-items-center items-center self-center'>
                                <div className='flex items-center'>
                                    <button
                                        onClick={decreaseQuantity}
                                        className="text-3xl w-10    flex items-center justify-center hover:bg-gray-300"
                                    >
                                        -
                                    </button>
                                    <input
                                        type="text"
                                        value={quantity}
                                        readOnly
                                        onChange={(e) => setQuantity(parseInt(e.target.value, 10))}
                                        className="w-full border border-gray-300 rounded-md text-center"
                                    />
                                    <button
                                        onClick={increaseQuantity}
                                        className="text-3xl w-10 flex  items-center  justify-center hover:bg-gray-300"
                                    >
                                        +
                                    </button>

                                </div>
                                <p className='px-2 pt-2'>€3.90</p>
                            </div>
                        </div>
                    </div>
                    <hr className='mx-10 ' />
                    <div className='flex justify-between py-5'>
                        <p>Tổng phụ</p>
                        <p className='px-2'>€3.90</p>
                    </div>
                    <div className='text-left'>
                        <button className='text-blue-400'> Giỏ hàng</button>
                    </div>

                    <div className="max-w-full pt-4 bg-white ">
                        <h2 className="text-[24px] font-bold mb-4">Thông Tin Giao Hàng</h2>
                        <form onSubmit={handleSubmit}>
                            <div className="mb-4">
                                <label htmlFor="name" className="block text-sm font-medium text-gray-600">
                                    Họ và Tên
                                </label>
                                <input
                                    type="text"
                                    id="name"
                                    name="name"
                                    defaultValue={formData.name}
                                    onChange={handleChange}
                                    className="mt-1 p-2 w-full border border-gray-300 rounded-md"
                                />
                            </div>
                            <div className="mb-4 flex">
                                <div className="w-1/2 pr-2">
                                    <label htmlFor="email" className="block text-sm font-medium text-gray-600">
                                        Email
                                    </label>
                                    <input
                                        type="email"
                                        id="email"
                                        name="email"
                                        defaultValue={formData.email}
                                        onChange={handleChange}
                                        className="mt-1 p-2 w-full border border-gray-300 rounded-md"
                                    />
                                </div>
                                <div className="w-1/2 pl-2">
                                    <label htmlFor="phone" className="block text-sm font-medium text-gray-600">
                                        Số Điện Thoại
                                    </label>
                                    <input
                                        type="tel"
                                        id="phone"
                                        name="phone"
                                        defaultValue={formData.phone}
                                        onChange={handleChange}
                                        className="mt-1 p-2 w-full border border-gray-300 rounded-md"
                                    />
                                </div>
                            </div>
                            <div className="mb-4">
                                <label htmlFor="address" className="block text-sm font-medium text-gray-600">
                                    Địa chỉ
                                </label>
                                <input
                                    type="text"
                                    id="address"
                                    name="address"
                                    defaultValue={formData.address}
                                    onChange={handleChange}
                                    className="mt-1 p-2 w-full border border-gray-300 rounded-md"
                                />
                            </div>
                            {/* <button
                                type="submit"
                                className="bg-blue-500 text-white font-semibold py-2 px-4 rounded-md hover:bg-blue-600"
                            >
                                Đặt Hàng
                            </button> */}
                        </form>
                    </div>

                </div>


                {/* right */}
                <div className='w-[40%] '>
                    {/*  */}
                    <div className='px-5 py-3 bg-[#F4F4F4]'>
                        <div className=''>
                            <h1 className='text-[25px] my-4'>Order summery</h1>
                            <div className='flex justify-between my-2'>

                                <p>Tạm tính</p>

                                <p className='px-2'>€3.90</p>

                            </div>
                            <div className='flex justify-between my-2'>

                                <p>Vận chuyển</p>

                                <p className='px-2'>€3.95</p>

                            </div>
                        </div>

                        <hr className='mx-10 my-5 ' />
                        <div className='flex justify-between items-center'>

                            <p>Tổng cộng</p>

                            <p className='px-2 text-[20px]'>€7.85</p>

                        </div>
                        <p className='opacity-50 py-4'>
                            Thời gian vận chuyển ước tính: 2 ngày</p>
                        <div className='text-center  bg-[#282828] py-3'>
                            <button className='text-[20px] text-white' type='submit'>Hoàn tất đơn hàng</button>
                        </div>
                    </div>
                    {/* 2 */}
                    <div className='px-5 py-3 bg-[#F4F4F4] my-5'>
                        <p className='text-[22px] py-3'>Payment type</p>
                        <div className='flex justify-between'>
                            <img src={Visa} alt="" />
                            <img src={mastercard} alt="" />
                            <img src={maestro} alt="" />
                            <img src={ideal} alt="" />
                            <img src={advance} alt="" />
                        </div>
                    </div>
                    {/* 3 */}
                    <div className='px-5 py-3 bg-[#F4F4F4]'>
                        <h2 className='text-[22px] my-4'>Delivery and retour</h2>
                        <ul className='list-disc px-5 leading-8'>
                            <li>Order before 12:00 and we will ship the same day.

                            </li>
                            <li>Orders made after Friday 12:00 are processed on Monday.

                            </li>
                            <li>To return your articles, please contact us first.</li>
                            <li>Postal charges for retour are not reimbursed.
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
            <div className="lg:col-span-3 mt-5">
                <h1 className='text-[32px] text-center font-bold py-3'>Sản phẩm tương tự</h1>
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
    )
}

export default Checkout