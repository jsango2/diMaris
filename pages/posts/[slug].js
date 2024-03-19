import React, { useState, useEffect } from "react";
import { useRouter } from "next/router";

import { catalogData } from "../../catalogData";

export default function Post({ page, params }) {
  // console.log("Path", params);
  // const pager = catalogData.find(
  //   (page) => page.IME.split(" ").join("") === params.slug
  // );

  return (
    <div style={{ textAlign: "center", fontSize: "45px", marginTop: "40px" }}>
      {/* PROIZVOD: {page.IME} */}
    </div>
  );
}

// export async function getStaticPaths() {
//   const paths = catalogData.map((page) => {
//     const slug = page["IME PROIZVODA - do 60 znakova"];
//     return { params: { slug } };
//   });
//   return { paths, fallback: true };
// }

///------//
// string.split(" ").join("")
// export const getStaticPaths = async () => {;
//   const pathsNoSpace = catalogData.map((path) => path.IME.split(" ").join(""));
//   paths: catalogData.pathsNoSpace((node) => `/posts/${node.IME}`) || [];
//   return
//   return {
//     fallback: false,
//   };
// };
// export async function getStaticPaths() {
//   const paths = catalogData.map((page) => {
//     const slug = page["IME PROIZVODA - do 60 znakova"];
//     return { params: { slug } };
//   });
//   return { paths, fallback: true };
// }

// export async function getStaticPaths() {
//   const paths = catalogData.map((page) => {
//     const slug = page.IME.split(" ").join("");
//     return { params: { slug } };
//   });
//   return { paths, fallback: true };
// }

// // export async function getStaticProps({ params }) {
// //   const currentPath = `/posts/${params}`;
// //   const page = catalogData.find((page) => page.IME === );
// //   return { props: { page } };
// // }

// export async function getStaticProps({ params }) {
//   const currentPath = params.slug;
//   const page = catalogData.find(
//     (page) => page.IME.split(" ").join("") === currentPath
//   ) || { notfound: true };

//   // const page = catalogData.find((a) => a.IME === "Lignja")
//   return { props: { page, params } };
// }
