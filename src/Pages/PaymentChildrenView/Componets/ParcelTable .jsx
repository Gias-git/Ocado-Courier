import React from "react";

const ParcelTable = () => {
  const parcels = [
    {
      creationDate: "26-10-2024",
      parcelId: "S45DF55444",
      orderId: "1211",
      customerName: "Abdul Golam",
      customerPhone: "01636073552",
      deliveryArea: "Mirpur",
      invoiceDate: "27-10-2024",
      collectable: "৳ 45,219",
      collected: "৳ 25,456",
      cod: "৳ 452.19",
      deliveryCharge: "৳ 70",
      weightCharge: "৳ 0",
      total: "৳ 522.19",
      payable: "৳ 24,933.81",
      invoiceStatus: "Delivered",
    },
    {
        creationDate: "26-10-2024",
        parcelId: "S45DF55444",
        orderId: "1211",
        customerName: "Abdul Golam",
        customerPhone: "01636073552",
        deliveryArea: "Mirpur",
        invoiceDate: "27-10-2024",
        collectable: "৳ 45,219",
        collected: "৳ 25,456",
        cod: "৳ 452.19",
        deliveryCharge: "৳ 70",
        weightCharge: "৳ 0",
        total: "৳ 522.19",
        payable: "৳ 24,933.81",
        invoiceStatus: "Delivered",
      },
      {
        creationDate: "26-10-2024",
        parcelId: "S45DF55444",
        orderId: "1211",
        customerName: "Abdul Golam",
        customerPhone: "01636073552",
        deliveryArea: "Mirpur",
        invoiceDate: "27-10-2024",
        collectable: "৳ 45,219",
        collected: "৳ 25,456",
        cod: "৳ 452.19",
        deliveryCharge: "৳ 70",
        weightCharge: "৳ 0",
        total: "৳ 522.19",
        payable: "৳ 24,933.81",
        invoiceStatus: "Delivered",
      },
    // Add more parcel entries if needed
  ];

  return (
    <div className=" bg-white shadow-md rounded-md mt-10">
      <table className="min-w-full border-collapse">
        <thead>
          <tr className="text-left bg-gray-100">
            <th className="px-4 py-2 text-gray-600">Creation Date</th>
            <th className="px-4 py-2 text-gray-600">Parcel ID</th>
            <th className="px-4 py-2 text-gray-600">Order ID</th>
            <th className="px-4 py-2 text-gray-600">Customer Info</th>
            <th className="px-4 py-2 text-gray-600">Invoice Status</th>
            <th className="px-4 py-2 text-gray-600">Collectable</th>
            <th className="px-4 py-2 text-gray-600">Collected</th>
            <th className="px-4 py-2 text-gray-600">COD</th>
            <th className="px-4 py-2 text-gray-600">Delivery Charge</th>
            <th className="px-4 py-2 text-gray-600">Total</th>
            <th className="px-4 py-2 text-gray-600">Payable</th>
          </tr>
        </thead>
        <tbody>
          {parcels.map((parcel, index) => (
            <tr
              key={index}
              className={`border-b ${
                index % 2 === 0 ? "bg-white" : "bg-gray-50"
              }`}
            >
              <td className="px-4 py-2">{parcel.creationDate}</td>
              <td className="px-4 py-2 text-red-500">{parcel.parcelId}</td>
              <td className="px-4 py-2 text-center">{parcel.orderId}</td>
              <td className="px-4 py-2 text-center">
                <p>{parcel.customerName}</p>
                <p>{parcel.customerPhone}</p>
                <p className="text-gray-500">Delivery Area: {parcel.deliveryArea}</p>
              </td>
              <td className="px-4 py-2">
                <span className="px-2 py-1 text-sm font-medium text-green-600 bg-green-100 rounded">
                  {parcel.invoiceStatus}
                </span>
                <p className="text-sm">{parcel.invoiceDate}</p>
              </td>
              <td className="px-4 py-2">{parcel.collectable}</td>
              <td className="px-4 py-2">{parcel.collected}</td>
              <td className="px-4 py-2">{parcel.cod}</td>
              <td className="px-4 py-2">
                <p>{parcel.deliveryCharge}</p>
                <p className="text-gray-500">Weight Charge {parcel.weightCharge}</p>
              </td>
              <td className="px-4 py-2">{parcel.total}</td>
              <td className="px-4 py-2">{parcel.payable}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default ParcelTable;
