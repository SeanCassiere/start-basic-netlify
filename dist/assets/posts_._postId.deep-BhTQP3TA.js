import{jsxs as s,jsx as t}from"react/jsx-runtime";import{f as r,L as m}from"./ssr-DVrxIcU9.js";import{a as i}from"./posts-CDh60tea.js";import"h3";import"node:async_hooks";import"react";import"node:stream";import"isbot";import"react-dom/server";import"react-dom";import"redaxios";const y=function(){const e=r.useLoaderData();return s("div",{className:"p-2 space-y-2",children:[t(m,{to:"/posts",className:"block py-1 text-blue-800 hover:text-blue-600",children:"← All Posts"}),t("h4",{className:"text-xl font-bold underline",children:e.title}),t("div",{className:"text-sm",children:e.body})]})},N=async({params:{postId:o}})=>i(o);export{y as component,N as loader};