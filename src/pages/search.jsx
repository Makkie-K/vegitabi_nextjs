// import { useState, useEffect } from "react";
import React from "react";

export async function getServerSideProps() {
  let apiUrl;
  if (process.env.NODE_ENV === "production") {
    apiUrl = process.env.NEXT_PUBLIC_API_URL_PROD;
  } else {
    apiUrl = process.env.NEXT_PUBLIC_API_URL_DEV;
  }
  try {
    const res = await fetch(apiUrl);

    const allPostsData = await res.json();
    return { props: { allPostsData } };
  } catch (err) {
    console.error(err);
    return { props: { allPostsData: null } };
  }
}

export default function Search({ allPostsData }) {
  return (
    <>
      <ul>
        {allPostsData ? (
          allPostsData.map((postData) => (
            <li key={postData.id}>
              <p>
                id: {postData.id}
                <br />
                title: {postData.title}
                <br />
                titlejp: {postData.titlejp}
                <br />
                date: {postData.date}
                <br />
                category: {postData.category}
                <br />
                categoryJp: {postData.categoryJp}
                <br />
                area: {postData.area}
                <br />
                areaJp: {postData.areaJp}
                <br />
                avator: {postData.avator}
                <br />
                address: {postData.address}
                <br />
                map: {postData.map}
                <br />
                telephone: {postData.telephone}
                <br />
                url: {postData.url}
                <br />
                businessHour: {postData.businessHour}
                <br />
                others: {postData.others}
              </p>
            </li>
          ))
        ) : (
          <p>データなし</p>
        )}
      </ul>
    </>
  );
}
