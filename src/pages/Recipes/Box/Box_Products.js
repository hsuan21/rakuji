import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import "../Recipes/Recipes.css";
import MyBackTop from "../../About/myComponents/MyBackTop";
import Box_Ingredients from "./Box_Ingredients";
import $ from "jquery";

function Box_Products() {
  //先取得網址字串，假設此頁網址為「http://localhost:3000/recipes/id=1」
  const url = window.location.href;
  //之後去分割字串把分割後的字串放進陣列中
  const ary1 = url.split("=");
  //此時ary1裡的內容為：
  // console.log(ary1);
  //ary1[0] = "http://localhost:3000/recipes/id"，ary2[1] = '1'

  //取得id值
  const id = ary1[1];

  const [datas, setDatas] = useState([]);
  const fetchData = async () => {
    const response = await fetch(
      `${process.env.REACT_APP_API_URL}/recipes/box_Products/products`
    );
    const results = await response.json();
    setDatas(results);
  };
  useEffect(() => {
    fetchData();
  }, []);

  const [recipesIndex, setRecipesIndex] = useState(0);
  const recipesArray = ["全部", "主食", "前菜", "湯品", "飲品", "甜點"];

  const DP = datas.filter((v, i) => {
    if (recipesIndex === 0) return true;
    return v.RecipesClass === recipesArray[recipesIndex];
  });

  useEffect(() => {
    $(`#recipesArray_buttons button[id=${recipesIndex}]`).attr("id", "active");
  });
  console.log(recipesIndex);
  const elem = document.getElementById("RecipesClass");
  // const ary1 = url.split("=");
  console.log(elem);

  useEffect(() => {
    $("#recipesArray_buttons button").click(function () {
      $("#recipesArray_buttons button").removeAttr("id");
      $(this).attr("id", "active");
    });
  }, []);

  return (
    <>
      <div className="RecipesSearchBoxCardAll  col row  RecipesOff container">
        {DP.map((v, i) => {
          return (
            <div key={i} className="RecipesSearchBoxCardAll col-3  container ">
              <div className="RecipesSearchBoxCard  " id="recipesArray_buttons">
                <Link to={`/products/product_detail/${v.id}`}>
                  <img
                    src={`/img/products/${v.picture}`}
                    className="card-img-top RecipesListImg "
                    alt={v.name}
                  />

                  <div className="card-body ">
                    <img className="Boximg " />
                    {v.name}
                    <button className=" RecipesLookButton" id="">
                      我有興趣
                    </button>
                  </div>
                </Link>
              </div>
            </div>
          );
        })}
      </div>
    </>
  );
}

export default Box_Products;
