import React from 'react'
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';

const Contact = () => {
    const position = [51.505, -0.09];
    return (
        <section className="bg-gray-100">
            <div className="mx-auto max-w-screen-xl px-4 py-16 sm:px-6 lg:px-8">
                <div className="grid grid-cols-1 gap-x-16 gap-y-8 lg:grid-cols-5">
                    <div className="lg:col-span-2 lg:py-12">
                        <h2 className='text-[#f7911d] uppercase text-[35px] font-bold'>LIÊN HỆ</h2>
                        <p className="max-w-xl text-[16px]">
                            At the same time, the fact that we are wholly owned and totally
                            independent from manufacturer and other group control gives you
                            confidence that we will only recommend what is right for you.
                        </p>

                        <div className="mt-8">
                            <a href="" className="text-2xl font-bold text-pink-600">
                                0151 475 4450
                            </a>

                            <address className="mt-2 not-italic">
                                282 Kevin Brook, Imogeneborough, CA 58517
                            </address>
                        </div>
                    </div>

                    <div className="rounded-lg bg-white p-8 shadow-lg lg:col-span-3 lg:p-12">
                        <form action="" className="space-y-4">
                            <div>
                                <label className="sr-only" htmlFor="name">Name</label>
                                <input
                                    className="w-full rounded-lg border-gray-200 p-3 text-sm"
                                    placeholder="Họ và tên"
                                    type="text"
                                    id="name"
                                    required
                                />
                            </div>

                            <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
                                <div>
                                    <label className="sr-only" htmlFor="email">Email</label>
                                    <input
                                        className="w-full rounded-lg border-gray-200 p-3 text-sm"
                                        placeholder="Email"
                                        type="email"
                                        id="email"
                                    />
                                </div>

                                <div>
                                    <label className="sr-only" htmlFor="phone">Phone</label>
                                    <input
                                        className="w-full rounded-lg border-gray-200 p-3 text-sm"
                                        placeholder="Số điện thoại"
                                        type="tel"
                                        id="phone"
                                    />
                                </div>
                            </div>

                            <div className="grid grid-cols-1 gap-4 text-center sm:grid-cols-3">
                                <div>
                                    <input
                                        className="peer sr-only"
                                        id="option1"
                                        type="radio"

                                        name="option"
                                    />

                                    <label
                                        htmlFor="option1"
                                        className="block w-full rounded-lg border border-gray-200 p-3 text-gray-600 hover:border-black peer-checked:border-black peer-checked:bg-black peer-checked:text-white"

                                    >
                                        <span className="text-sm">Góp ý và phản hồi</span>
                                    </label>
                                </div>

                                <div>
                                    <input
                                        className="peer sr-only"
                                        id="option2"
                                        type="radio"

                                        name="option"
                                    />

                                    <label
                                        htmlFor="option2"
                                        className="block w-full rounded-lg border border-gray-200 p-3 text-gray-600 hover:border-black peer-checked:border-black peer-checked:bg-black peer-checked:text-white"

                                    >
                                        <span className="text-sm">Hỗ trợ đặt hàng </span>
                                    </label>
                                </div>

                                <div>
                                    <input
                                        className="peer sr-only"
                                        id="option3"
                                        type="radio"

                                        name="option"
                                    />

                                    <label
                                        htmlFor="option3"
                                        className="block w-full rounded-lg border border-gray-200 p-3 text-gray-600 hover:border-black peer-checked:border-black peer-checked:bg-black peer-checked:text-white"

                                    >
                                        <span className="text-sm">Trả hàng hoàn tiền </span>
                                    </label>
                                </div>
                            </div>

                            <div>
                                <label className="sr-only" htmlFor="message">Message</label>

                                <textarea
                                    className="w-full rounded-lg border-gray-200 p-3 text-sm"
                                    placeholder="Nội dung gửi"
                                    rows={8}
                                    id="message"
                                ></textarea>
                            </div>

                            <div className="mt-4">
                                <button
                                    type="submit"
                                    className="inline-block w-full rounded-lg bg-black px-5 py-3 font-medium text-white sm:w-auto"
                                >
                                    Gửi thông tin
                                </button>
                            </div>
                        </form>
                    </div>
                </div>

                <div className='pt-2'>
                    <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3723.710466787863!2d105.7510927!3d21.044267899999998!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x313454ec40f7208f%3A0x196126c462692572!2zTmcuIDkxIMSQLiBD4bqndSBEaeG7hW4sIEtp4buBdSBNYWksIFBow7pjIERp4buFbiwgQuG6r2MgVOG7qyBMacOqbSwgSMOgIE7hu5lp!5e0!3m2!1svi!2s!4v1698747664089!5m2!1svi!2s" width="1215px " height="450"  ></iframe>
                </div>
            </div>
        </section>
    )
}

export default Contact
