

import React, { useEffect, useState } from 'react';
import "../Table/Table.scss"
import "../GeneralFiles/General.css"
import "bootstrap/dist/css/bootstrap.min.css"
function Table() {



    const [data, setdata] = useState([
        { id: 1, name: "علی", lastName: "زمانیان", email: "ali@gmail.com", phone: "09917403979" },
        { id: 2, name: "مهدی", lastName: "زمانیان", email: "ali@gmail.com", phone: "09917403979" },
        { id: 3, name: "امیر", lastName: "زمانیان", email: "ali@gmail.com", phone: "09917403979" },
        { id: 4, name: "علی", lastName: "زمانیان", email: "ali@gmail.com", phone: "09917403979" },
        { id: 5, name: "مهدی", lastName: "زمانیان", email: "ali@gmail.com", phone: "09917403979" },
        { id: 6, name: "علی", lastName: "زمانیان", email: "ali@gmail.com", phone: "09917403979" },
        { id: 7, name: "مهدی", lastName: "زمانیان", email: "ali@gmail.com", phone: "09917403979" },
        { id: 8, name: "امیر", lastName: "زمانیان", email: "ali@gmail.com", phone: "09917403979" },
        { id: 9, name: "علی", lastName: "زمانیان", email: "ali@gmail.com", phone: "09917403979" },
        { id: 10, name: "مهدی", lastName: "زمانیان", email: "ali@gmail.com", phone: "09917403979" },
        { id: 11, name: "علی", lastName: "زمانیان", email: "ali@gmail.com", phone: "09917403979" },
        { id: 12, name: "مهدی", lastName: "زمانیان", email: "ali@gmail.com", phone: "09917403979" },
        { id: 13, name: "امیر", lastName: "زمانیان", email: "ali@gmail.com", phone: "09917403979" },
        { id: 14, name: "علی", lastName: "زمانیان", email: "ali@gmail.com", phone: "09917403979" },
        { id: 15, name: "مهدی", lastName: "زمانیان", email: "ali@gmail.com", phone: "09917403979" },
        { id: 16, name: "علی", lastName: "زمانیان", email: "ali@gmail.com", phone: "09917403979" },
        { id: 17, name: "مهدی", lastName: "زمانیان", email: "ali@gmail.com", phone: "09917403979" },
        { id: 18, name: "امیر", lastName: "زمانیان", email: "ali@gmail.com", phone: "09917403979" },
        { id: 19, name: "امیر", lastName: "زمانیان", email: "ali@gmail.com", phone: "09917403979" },
        { id: 20, name: "مهدی", lastName: "زمانیان", email: "ali@gmail.com", phone: "09917403979" },
        { id: 21, name: "امیر", lastName: "زمانیان", email: "ali@gmail.com", phone: "09917403979" },
        { id: 22, name: "علی", lastName: "زمانیان", email: "ali@gmail.com", phone: "09917403979" },
        { id: 23, name: "مهدی", lastName: "زمانیان", email: "ali@gmail.com", phone: "09917403979" },
        { id: 24, name: "علی", lastName: "زمانیان", email: "ali@gmail.com", phone: "09917403979" },
        { id: 25, name: "مهدی", lastName: "زمانیان", email: "ali@gmail.com", phone: "09917403979" },
        { id: 26, name: "امیر", lastName: "زمانیان", email: "ali@gmail.com", phone: "09917403979" },
        { id: 27, name: "امیر", lastName: "زمانیان", email: "ali@gmail.com", phone: "09917403979" },
        { id: 28, name: "امیر", lastName: "زمانیان", email: "ali@gmail.com", phone: "09917403979" },
        { id: 29, name: "امیر", lastName: "زمانیان", email: "ali@gmail.com", phone: "09917403979" },
        { id: 30, name: "علی", lastName: "زمانیان", email: "ali@gmail.com", phone: "09917403979" },
        { id: 31, name: "مهدی", lastName: "زمانیان", email: "ali@gmail.com", phone: "09917403979" },
        { id: 32, name: "امیر", lastName: "زمانیان", email: "ali@gmail.com", phone: "09917403979" },
        { id: 33, name: "امیر", lastName: "زمانیان", email: "ali@gmail.com", phone: "09917403979" },
        { id: 34, name: "امیر", lastName: "زمانیان", email: "ali@gmail.com", phone: "09917403979" },
        { id: 35, name: "امیر", lastName: "زمانیان", email: "ali@gmail.com", phone: "09917403979" },
        { id: 36, name: "امیر", lastName: "زمانیان", email: "ali@gmail.com", phone: "09917403979" },


    ])

    const [currentPage, setCurrentPage] = useState(1);
    const [itemPerPage, setItemsPerPage] = useState(5);


    const indexOfLastItem = currentPage * itemPerPage;
    const indexOfFirstItem = indexOfLastItem - itemPerPage;
    const currentItem = data.slice(indexOfFirstItem, indexOfLastItem);

    const [pageNumberLimit, setpageNumberLimit] = useState(5);
    const [maxPage, setmaxPage] = useState(5);
    const [minPage, setminPage] = useState(0);




    //Create Table
    const renderTable = (data) => {
        return (

            <section class="ftco-section">
                <div class="container">
                    <div class="row">
                        <div class="col-md-12">
                            <div class="table-wrap">
                                <table class="table">
                                    <thead class="thead-primary">
                                        <tr>
                                            <th>#</th>
                                            <th>نام</th>
                                            <th>نام خانوادگی</th>
                                            <th>ایمیل</th>
                                            <th>موبایل</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        {
                                            data.map((item, index) => (
                                                <React.Fragment>
                                                    <tr>
                                                        <th scope="row">{item.id}</th>
                                                        <td>{item.name}</td>
                                                        <td>{item.lastName}</td>
                                                        <td>{item.email}</td>
                                                        <td>{item.phone}</td>
                                                    </tr>
                                                </React.Fragment>
                                            ))
                                        }
                                    </tbody>
                                </table>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

        )
    }





    // Create Nav li
    const handleNavClick = (event, index) => {
        setCurrentPage(Number(event.target.id));

    }
    const pages = [];
    for (let i = 1; i <= Math.ceil(data.length / itemPerPage); i++) {
        pages.push(i)
    }
    const nav = pages.map((number, index) => {
        if (number < maxPage + 1 && number > minPage) {
            console.log(pages)
            return (

                <li id={number} onClick={handleNavClick} className={currentPage == number ? "liTableactive" : "liTable"}>{number}</li>
            )
        } else {
            return null
        }
    })


   
    const handleNextPage = () => {

        setCurrentPage(currentPage + 1);

        if (currentPage + 1 > maxPage) {
            setmaxPage(maxPage + pageNumberLimit);
            setminPage(minPage + pageNumberLimit);
        }

        else if(currentPage+1 > pages.length){
            setCurrentPage(1);
            setmaxPage(5)
            setminPage(0)
        }

    }

    const handleNextPageIncreament = () => {
        
    setminPage(minPage+5);
    setmaxPage(maxPage+5);
    setCurrentPage(minPage+6);

    if(maxPage > pages.length-1){
        setmaxPage(5);
        setminPage(0);
        setCurrentPage(1)
    }

    }




    const handlePreviewsPage = () => {

        setCurrentPage(currentPage - 1);
 
        if(currentPage-1 <= minPage){
            
            setmaxPage(currentPage-1);
            setminPage(currentPage-6)
        }

    }

    const handlePreviewsPageDecrement = () => {
        setminPage(minPage-5);
        setmaxPage(maxPage-5);
        setCurrentPage(minPage-4);

    }








    // const handleChangeSort =(event) =>{
    // setsort(event.target.value);
    // alert(sort)
    // }


const returnPage = () =>{
    alert(1)
}

    return (
        <React.Fragment>





            {renderTable(currentItem)}

            <ul className='d-flex justify-content-center container'>

                <li>
                    <button className={currentPage == pages[0] ? "nextPagenone" : "nextPage"} onClick={handlePreviewsPage}
                        
                    >قبلی</button>
                </li>

                <li><button className={minPage < 1 ? "nextPagenone" : "nextPage"} onClick={handlePreviewsPageDecrement}>&hellip;</button></li>

                {nav}

                <li>
                    <button className={maxPage >= pages[pages.length-1] ? "nextPagenone" : "nextPage"} onClick={handleNextPageIncreament}>&hellip;</button>
                </li>


                <li>
                    <button className={currentPage == pages[pages.length-1] ? "nextPagenone" : "nextPage"} onClick={handleNextPage}
                    
                    >بعدی</button>


                </li>
            </ul>
        </React.Fragment>
    )
}

export default Table