import React from 'react';

const FormFirstColumn = () => {
    return (
        <div className='space-y-5'>
            {/* Phone Field */}
            <div className='space-y-2'>
                <h1 className='text-lg font-medium'>Phone <span className='text-primaryColor'>  * </span></h1>
                <input required
                    type="number"
                    placeholder="Customer Phone Number"
                    className="input input-bordered  w-full max-w-xs" />
            </div>


            {/* Name Field */}
            <div className='space-y-2'>
                <h1 className='text-lg font-medium'>Name <span className='text-primaryColor'>  * </span></h1>
                <input required
                    type="text"
                    placeholder="Customer Name"
                    className="input input-bordered  w-full max-w-xs" />
            </div>



            {/* Address  Field */}
            <div className='space-y-2'>
                <h1 className='text-lg font-medium'>Address <span className='text-primaryColor'>  * </span></h1>
                <textarea required className="textarea textarea-bordered w-full max-w-xs" rows="2" placeholder="Customer full address"></textarea>
            </div>


            {/* Instructions  Field */}
            <div className='space-y-2'>
                <h1 className='text-lg font-medium'>Instructions</h1>
                <textarea className="textarea textarea-bordered w-full max-w-xs" rows="2" placeholder="Type here (Optional)"></textarea>
            </div>


            {/* Product Type Field */}
            <div className='space-y-2'>
                <h1 className='text-lg font-medium'>Product Type<span className='text-primaryColor'>  * </span></h1>
                <select className="select select-bordered w-full max-w-xs">
                    <option disabled selected>Package</option>
                    <option>Package</option>
                    <option>Package</option>
                    <option>Package</option>
                    <option>Package</option>

                </select>
            </div>

            {/* Category Field */}
            <div className='space-y-2'>
                <h1 className='text-lg font-medium'>Product Type<span className='text-primaryColor'>  * </span></h1>
                <select className="select select-bordered w-full max-w-xs">
                    <option disabled selected>Category</option>
                    <option>Category</option>


                </select>
            </div>
        </div>
    );
};

export default FormFirstColumn;