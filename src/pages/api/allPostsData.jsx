import { NextApiRequest, NextApiResponse } from "next";

// 返ってくるJSONオブジェクトの型を指定する必要はありません
export default function handler(req, res) {
  if (req.method?.toLowerCase() !== "get") {
    return res.status(405).end();
  }
  res.status(200).json([
    {
      id: 1,
      title: "The Berry Patch",
      titlejp: "ザ・ベリー・パッチ",
      date: "2022-11-12",
      category: "eat-drink",
      categoryJp: "飲食店",
      area: "australia",
      areaJp: "オーストラリア",
      avator: "13.webp",
      address: "4 Blackburn Dr, Turners Beach TAS 7315",
      map: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3003.7385047495313!2d146.238375!3d-41.162057000000004!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xaa7bcbff45c9d9cd%3A0xbff879cb93cfc4c8!2sTurners%20Beach%20Berry%20Patch!5e0!3m2!1sja!2sau!4v1669120503783!5m2!1sja!2sau",
      telephone: "03-6428-3967",
      url: "https://theberrypatch.com.au",
      businessHour:
        " 水曜日 〜 日曜日 8:30 〜 16:00（金曜日は夜遅くまで）　祝日は休み",
      others: "",
    },
    {
      id: 2,
      title: "Plaza Premium Lounge Dubai",
      titlejp: "プラザ・プレミアムラウンジ・ドバイ",
      date: "2020-01-31",
      category: "airport",
      categoryJp: "空港・機内食",
      area: "uae",
      areaJp: "アラブ首長国連邦",
      avator: "1.webp",
      address: "Concourse A - West WIng, Terminal3 - Dubai U.A.E",
      map: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3608.813483593167!2d55.370078879446254!3d25.24320638395376!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3e5f5dfc39e74a9d%3A0x6d53bcc4bba6b197!2sPlaza%20Premium%20Lounge%20Dubai!5e0!3m2!1sja!2sau!4v1669165091731!5m2!1sja!2sau",
      telephone: "+ 971 4 505 7940",
      url: "https://www.plazapremiumlounge.com/en-uk/find/india-middle-east-south-africa/united-arab-emirates/dubai/dubai-international-airport/international-departures-terminal-three?utm_source=google&utm_medium=organic&utm_campaign=mybusiness&utm_content=DXBT3IntDep",
      businessHour: "毎日営業　24時間営業",
      others: "",
    },
    {
      id: 3,
      title: "Shompoo Cruise",
      titlejp: "ションプー・クルーズ",
      date: "2024-05-13",
      category: "other",
      categoryJp: "その他",
      area: "Laos",
      areaJp: "ラオス",
      avator: "23.webp",
      address: "18/02 Ounkham Road, Luang Prabang",
      map: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3751.677076961775!2d102.1372907761364!3d19.89585312572196!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x312f2a1324cf5165%3A0xcf758d247c304e84!2sShompoo%20Cruise!5e0!3m2!1sja!2sjp!4v1715570759168!5m2!1sja!2sjp",
      telephone: "+856 71 213 189",
      url: "https://shompoo-cruise.com/en/",
      businessHour: "定休日: 日曜日、08:00 ~ 16:30",
      others: "",
    },
    {
      id: 4,
      title: "Le Grand Pakbeng",
      titlejp: "ル・グラン・パクベン",
      date: "2024-05-12",
      category: "accomodation",
      categoryJp: "宿泊施設",
      area: "Laos",
      areaJp: "ラオス",
      avator: "1.webp",
      address:
        "Ban Donkham, Pakbeng District, Oudomxay Province, Pakbeng District 85681",
      map: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3751.7519998420735!2d101.11840047406594!3d19.892691281487302!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x31284dd3ed7fa0f1%3A0x797a6493337dab35!2sLe%20Grand%20Pakbeng!5e0!3m2!1sja!2sjp!4v1715519449287!5m2!1sja!2sjp",
      telephone: "+856 81 21 4036",
      url: "http://www.legrandpakbeng.com",
      businessHour: "毎日24時間営業",
      others: "",
    },
  ]);
}
