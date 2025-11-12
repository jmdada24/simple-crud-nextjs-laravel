"use client"

import React from "react";
import {useState} from "react";



const Dashboard: React.FC =  () => {

    const [preview, setPreview] = useState(null);
    

    // const handleImageChange = (e) => {
    //     const file = e.target.files[0];
    //     if(file){
    //         setPreview(URL.createObjectURL(file));

    //     }
    // };

    return(
        <main className="max-w-6xl mx-auto px-4 mt-10 grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* Left side - Add Product Form */}
            <div className="card bg-base-100 shadow-md p-6">
                <h4 className="text-2xl font-semibold mb-4">Add Product</h4>
                <form action="" className="space-y-3">
                    <input type="text" name="title" placeholder="Title" required className="input input-bordered w-full"/>

                    <input type="text" name="description" placeholder="Description" required className="input input-bordered w-full"/>

                    <input type="text" name="cost" placeholder="Cost" required className="input input-bordered w-full"/>


                    {/* {preview && (
                        <div className="mt-2">
                            <img src={preview} alt="Preview" className="w-24 h-24 object-cover rounded"/>

                        </div>

                    )} */}

                    <input type="file" id="bannerInput" className="file-input file-input-bordered w-full"/>

                    <button type="submit" className="btn btn-primary w-full text-base">
                        Submit
                    </button>
                </form>
            </div>


            {/* Right Side - Table */}
            <div className="card bg-base-100 shadow-md p-6 overflow-x-auto">
                <h4 className="text-2xl font-semibold mb-4">Product List</h4>
                <table className="table">
                        <thead>
                            <tr>
                                <th>ID</th>
                                <th>Title</th>
                                <th>Banner</th>
                                <th>Cost</th>
                                <th>Actions</th>
                            </tr>

                        </thead>
                        <tbody>
                            <tr>
                                <td>1</td>
                                <td>Sample Product</td>
                                <td>
                                    <img src="/sample.jpg" alt="product" className="w-12 h-12 object-cover rounded"/>

                                </td>
                                <td>$100</td>
                                <td className="space-x-2">
                                    <button className="btn btn-warning btn-sm ">Edit</button>
                                    <button className="btn btn-error btn-sm">Delete</button>
                                </td>
                            </tr>

                        </tbody>

                </table>
            </div>

        </main>
        

    );


}

export default Dashboard;