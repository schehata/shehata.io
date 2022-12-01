#!/usr/bin/env ts-node

//const fs = require('fs');
//const RSS = require('rss');
//const {getSortedPosts} = require("../lib/posts")
import fs from 'fs'
import RSS from 'rss'
import { getSortedPosts} from "../lib/posts";

const generateRssFeed = async () => {
 const feedOptions = {
     title: 'إسلام شحاته',
     description: '',
     site_url: 'https://shehata.io',
     feed_url: 'https://shehata.io/feed',
     language: 'ar',
     webMaster: 'Islam Shehata <islam@shehata.io>',
     categories: ['web', 'freedom', 'tech', 'computer science'],
     pubDate: new Date().toISOString(),
     copyright: '2022 Islam Shehata',
     ttl: '60'
 };

 const feed = new RSS(feedOptions);
 const posts = await getSortedPosts(-1)
    console.log(posts.length)
    posts.forEach(post => feed.item({
        title: post.matter.title,
        description: post.matter.description,
        url: `https://shehata.io/blog/${post.category}/${post.slug}/`,
        categories: post.matter.tags,
        date: post.matter.date,
        enclosure: {
            url: `https://shehata.io${post.matter.coverImage.src}`,
        }
    }))


    fs.writeFileSync('./public/feed.xml', feed.xml({indent: true}), {
        flag: 'w'
    })
}
generateRssFeed()
//export default generateRssFeed