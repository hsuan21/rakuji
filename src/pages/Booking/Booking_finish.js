import React, { useState } from "react";
import { useEffect } from "react";
import { Link } from "react-router-dom";

const Booking_finish = () => {
  const bookingId = localStorage.getItem("bookingId");
  console.log(bookingId);

  const [bookingData, setBookingData] = useState({});

  const {
    member_id,
    booking_date,
    store,
    people_adult,
    people_kid,
    meal_time,
    booking_time,
    booking_name,
    booking_phone,
    email,
    statue,
    store_picture,
    store_address,
    store_phone,
  } = bookingData;

  const fetchBookingData = async () => {
    const response = await fetch(
      `${process.env.REACT_APP_API_URL}/booking/bookingfinish`
    );
    const results = await response.json();
    const booking = await results.find((v) => v.id == bookingId);
    // console.log(booking);
    setBookingData(booking);
  };

  console.log(bookingData);

  useEffect(() => {
    fetchBookingData();
  }, []);

  return (
    <>
      <div
        id="carouselExampleCaptions"
        className="carousel slide booking_finish_banner"
        data-bs-ride="carousel"
      >
        <div className="carousel-inner">
          <div className="carousel-item active">
            <img
              src={`/img/store/${store_picture}`}
              className="d-block w-100"
              alt="..."
            />
          </div>
          {/* <div className="carousel-item">
            <img
              src={require("./images/carousel/images_1.jpg")}
              className="d-block w-100"
              alt="..."
            />
          </div>
          <div className="carousel-item">
            <img
              src={require("./images/carousel/images_2.jpg")}
              className="d-block w-100"
              alt="..."
            />
          </div> */}
        </div>
      </div>

      <div className="booking_finish container mt-5">
        <div className="row">
          <div className="d-flex flex-column justify-content-center align-items-center">
            <div className="d-flex justify-content-center align-items-center mb-4">
              <i className="fa-solid fa-check me-2 booking_check"></i>
              <h1 className="mb-0">????????????</h1>
            </div>
            <h5 className="mb-0">????????????????????????????????????</h5>
          </div>

          <div className="d-flex justify-content-center">
            {/* ?????????????????? */}
            <div className="booking_store_information row">
              <hr className="my-3" />
              <div className="col-6 booking_information">
                <div>
                  <h3>????????????</h3>
                  <p>???????????????{bookingId}</p>

                  <p>???????????????{store}</p>
                  <p>
                    ???????????????{people_adult}????????????{people_kid}?????????
                  </p>
                  <p>???????????????{booking_date}</p>
                  <p>???????????????{booking_time}</p>
                  <p>??????????????????{booking_name}</p>
                  <p>??????????????????{booking_phone}</p>
                  <p>?????????Email???{email}</p>
                  <p>?????????{statue}</p>

                  {/* <p>????????????:{bookingData.store}</p>
                  <p>
                    ????????????:{bookingData.people_adult}????????????
                    {bookingData?.people_kid}?????????
                  </p>
                  <p>????????????:{bookingData.booking_date}</p>
                  <p>????????????:{bookingData.booking_time}</p>
                  <p>???????????????:{bookingData.name}</p>
                  <p>???????????????:{bookingData.phone}</p>
                  <p>?????????Email:{bookingData.email}</p>
                  <p>??????:{bookingData.statue}</p> */}

                  {/* <p>????????????:{bookingData?.store}</p>
                  <p>
                    ????????????:{bookingData?.people_adult}????????????{bookingData?.people_kid}?????????
                  </p>
                  <p>????????????:{bookingData?.booking_date}</p>
                  <p>????????????:{bookingData?.booking_time}</p>
                  <p>???????????????:{bookingData?.name}</p>
                  <p>???????????????:{bookingData?.phone}</p>
                  <p>?????????Email:{bookingData?.email}</p>
                  <p>??????:{bookingData?.statue}</p> */}
                </div>
              </div>
              <div className="col-6 store_information">
                <div>
                  <h3>????????????</h3>
                  <div className="d-flex align-items-center my-3">
                    <div className="me-3 col-1">
                      <i className="fa-solid fa-house-chimney"></i>
                    </div>
                    <div className="col-11">
                      <p className="mb-0">{store}</p>
                    </div>
                  </div>

                  <div className="d-flex align-items-center my-3">
                    <div className="me-3 col-1">
                      <i className="fa-solid fa-location-dot"></i>
                    </div>
                    <div className="col-11">
                      <p className="mb-0">{store_address}</p>
                    </div>
                  </div>

                  <div className="d-flex align-items-center my-3">
                    <div className="me-3 col-1">
                      <i className="fa-solid fa-phone"></i>
                    </div>
                    <div className="col-11">
                      <p className="mb-0">{store_phone}</p>
                    </div>
                  </div>

                  <div className="d-flex my-3">
                    <div className="me-3 col-1">
                      <i className="fa-solid fa-clock"></i>
                    </div>
                    <div className="mb-0">
                      <ul>
                        <li>
                          ?????? - 11:00 ~ 14:30 <br /> (?????????????????? 14:00)
                        </li>
                        <li>
                          ?????? - 17:30 ~ 21:30 <br /> (?????????????????? 20:30)
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="d-flex justify-content-center">
            <Link to="/products">
              <button className="products_page my-4 mx-3">????????????</button>
            </Link>

            <Link to="/">
              <button className="home_page my-4 mx-3">????????????</button>
            </Link>
          </div>
        </div>
      </div>
    </>
  );
};

export default Booking_finish;
