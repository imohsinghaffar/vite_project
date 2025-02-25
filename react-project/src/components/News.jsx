import React from "react";
import NewsItems from "./NewsItems";

const News = () => {
    let article = [
        {
          "source": {
            "id": "bbc-sport",
            "name": "BBC Sport"
          },
          "author": null,
          "title": "Australia vs England LIVE: Champions Trophy ODI 2025",
          "description": "Australia face England in the Champions in Lahore - follow live cricket scores, text updates, in-play video clips and radio commentary",
          "url": "http://www.bbc.co.uk/sport/cricket/live/c5y7e76ln4mt",
          "urlToImage": "https://static.files.bbci.co.uk/ws/simorgh-assets/public/sport/images/metadata/poster-1024x576.png",
          "publishedAt": "2025-02-22T09:22:26.7043206Z",
          "content": "England: Phil Salt, Ben Duckett, Jamie Smith (wicketkeeper), Joe Root, Harry Brook, Jos Buttler (captain), Liam Livingstone, Brydon Carse, Jofra Archer, Adil Rashid, Mark Wood.\r\nAustralia: Matt Short… [+169 chars]"
        },
        {
          "source": {
            "id": "espn-cric-info",
            "name": "ESPN Cric Info"
          },
          "author": null,
          "title": "PCB hands Umar Akmal three-year ban from all cricket | ESPNcricinfo.com",
          "description": "Penalty after the batsman pleaded guilty to not reporting corrupt approaches | ESPNcricinfo.com",
          "url": "http://www.espncricinfo.com/story/_/id/29103103/pcb-hands-umar-akmal-three-year-ban-all-cricket",
          "urlToImage": "https://a4.espncdn.com/combiner/i?img=%2Fi%2Fcricket%2Fcricinfo%2F1099495_800x450.jpg",
          "publishedAt": "2020-04-27T11:41:47Z",
          "content": "Umar Akmal's troubled cricket career has hit its biggest roadblock yet, with the PCB handing him a ban from all representative cricket for three years after he pleaded guilty of failing to report det… [+1506 chars]"
        },
        {
          "source": {
            "id": "espn-cric-info",
            "name": "ESPN Cric Info"
          },
          "author": null,
          "title": "What we learned from watching the 1992 World Cup final in full again | ESPNcricinfo.com",
          "description": "Wides, lbw calls, swing - plenty of things were different in white-ball cricket back then | ESPNcricinfo.com",
          "url": "http://www.espncricinfo.com/story/_/id/28970907/learned-watching-1992-world-cup-final-full-again",
          "urlToImage": "https://a4.espncdn.com/combiner/i?img=%2Fi%2Fcricket%2Fcricinfo%2F1219926_1296x729.jpg",
          "publishedAt": "2020-03-30T15:26:05Z",
          "content": "Last week, we at ESPNcricinfo did something we have been thinking of doing for eight years now: pretend-live ball-by-ball commentary for a classic cricket match. We knew the result, yes, but we tried… [+6823 chars]"
        }
      ]
      
  return (
    <>

    <div className="flex mx-5 items-center justify-center">
        {article.map((at, index)=>{
            return <NewsItems key={index} title={at.title} desc={at.description} img = {at.urlToImage}/>
})}
      </div>
    </>
  );
};

export default News;
