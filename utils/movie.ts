export interface Ratings {
  excitement: number;
  romance: number;
  emotion: number;
  overall: number;
}

export interface Movie {
  src: string; // URL หรือ path ของรูปภาพ
  title: string;
  hot: string;
  description: string;
  category: "Series" | "Movies" | "Documentaries";
  genre: string;
  ratings: Ratings;
}

// ฟังก์ชัน importAll สำหรับโหลดรูปภาพทั้งหมดใน Vite
const importAll = () => {
  const images: { [key: string]: string } = {};
  const modules = import.meta.glob("../src/images/*.{png,jpg,jpeg}", { eager: true });
  Object.keys(modules).forEach((path) => {
    const fileName = path.split("/").pop()?.replace(/\.(png|jpg|jpeg)$/i, "") || "";
    images[fileName] = (modules[path] as { default: string }).default;
  });
  return images;
};

// โหลดรูปภาพจากโฟลเดอร์ ../src/images
const images = importAll();

// Map ชื่อที่ไม่ตรงกันระหว่าง key ใน movie และชื่อไฟล์จริง
const imageAlias: { [key: string]: string } = {
  twenty: "20cen",
  alchemyofsoul: "alchemy",
  alchemyofsoul2: "alchemy2",
  flash: "thunder",
  Twinkling: "twinkling-watermelon",
  Undercover: "undercover",
  friendlyrivalry: "friendly-rivalry",
  mydearestnemesis: "dearest-nemesis",
};

const movie: Omit<Movie, "rank">[] = [
  {
    src: images[imageAlias.Twinkling],
    title: "Twinkling Watermelon",
    hot: "true",
    description:
      "เป็นเรื่องที่โดนเเนะนำจากyoutube ดูเล่นๆ เเต่โดนนางเอกตก โคตรสวย สวยสัสๆ เเละplot เเม่งก็ไม่ค่อยได้ดู ย้อนเวลากลับไปช่วย คนในอดีต มันสนุกมาก เเต่ละฝั่งทั้งพ่อเเม่พระเอกที่หูหนวกเเละได้ย้อนกลับไปรู้ว่าพ่อเป็นคนปกติ รวมถึงเเม่อันนี้ตัวเด็ด เป็นเรื่องเเรกเลยที่นางเอกกับนางรองหน้าตาไม่ต่างกันเลย โคตรจะฟิน เเม่ง สุดยอดที่สุดละทั้งเนื้อเรื่องเเละความฟิน",
    category: "Series",
    genre: "Romance",
    
    ratings: { excitement: 9, romance: 9.8, emotion: 10, overall: 10 },
  },
  {
    src: images["qot"],
    title: "Queen of Tears",
    hot: "true",
    description:
      "ดูจบหลังจากเพิ่งเลิกกับเเฟนคนเเรก เเม่งทำให้โคตรเศร้า เเม่งซึมจากqueen of tear effectไปเดือนนึงเต็มๆ กูเกือบเป็นซึ่มเศร้าจริง เเม่งโคตรดิ่ง กูโคตรทรมาณ เเต่ตอนดูคือ กอไปหาคิมจีวอนกับพระเอก ตลอดเพราะเคมีเข้ากันสัสๆ เข้กันเเบบ สุดยอดอ่ะ ตอนดูจบคือไม่คิดว่าจะมีเรื่องไหนเเซงละ ละสุดท้าย ก็มีเรื่องที่ทำให้มันมาอยู่อันดับที่สอง",
    category: "Series",
    genre: "Drama",
    
    ratings: { excitement: 8.0, romance: 10, emotion: 10, overall: 9.9 },
  },
  {
    src: images["moving"],
    title: "Moving",
    hot: "true",
    description:
      "ตอนเเรก คือ มาดูเพราะ โกยูจองเลย โคตรสวยเพราะดูมาจากresident paybook เเต่พอเริ่มดู มันเหมือนกับว่าได้โกยูจองช่วยไว้นะ ไม่งั้นคงไม่ได้ดู โกยูจองมาช่วยพาไปถึง8ตอนเเรกมั้งเเบบ เซอร์วิสความสวยชิบหาย โคตรฟิน ดูไปเพลินๆ เเละก็มีเล่าเรื่องตัวละครเเต่ละตัวหลังจากนั้น ซึ่งช่วงเเรกก็ไม่เข้าใจว่าเล่าไปทำไม ทั้งพ่อเเม่ พระเอก,นางเอกโดยเฉพาะpart พ่อเเม่พระเอก เเม่งทดเเทนการหายไปของโกยูจองได้เเบบไม่มีข้อกังขา มันสามารถสร้างได้อีกเรื่องเลยนะ โคตรดีอ่ะ รักต้องห้าม เเละ ไอตัวสายฟ้า เเต่พอดูไปเรื่อยๆเข้าใจละ เเม่งทำให้โคตรอิน พ่อเเม่พระเอกก็สวยชิบหาย เนื้อเรื่องก็เเบบน่าดูตลอดเวลา ยิ่งตอนที่มีพ่อที่เป็นบ้ามาช่วยลูกหัวหน้าห้อง เเม่งโคตรสุด โคตรattacker เรื่องนี้โคตรดี ดีทุกอย่าง ยังตรึงใจอยู่เลย เป็นเรื่องเเรกๆที่เก็บได้ทุกdetail ทุกปมที่ทิ้งไว้ จำได้หมดเลย ชอบจริงๆ",
    category: "Series",
    genre: "Action",
    
    ratings: { excitement: 10, romance: 9.5, emotion: 9, overall: 9.9 },
  },
  {
    src: images[imageAlias.flash],
    title: "MAD UNICORN",
    hot: "true",
    description:
      "(สงคราม ส่งด่วน) กระเเสโคตรเเรง สำหรับซีรีย์นี้ เลยมาลองดู เสี่ยวหยูในเรื่องคือโคตรmvp เป็นคนที่เชื่อมั่นall inเมื่อมั่นใจสมกับที่พูด ทั้งเรื่องไม่ค่อยมีฉากรักที่กูชอบเลย เเต่มันกลับทำได้โคตรน่าติดตาม ตัวร้ายน่ารำคาญเเต่ ไม่ได้ไร้สาระ ดูเป็นตัวร้ายที่ไม่ทให้หมดสนุกเกินไป ส่วนเรื่องราวก็โคตรเข้มข้ม เดายาก สนุกมากๆ มันปนทั้งตลก ความเเบบ ความได้ใจอะ มึงใเดือดกันทั้งสามผู้ถือหุ้นใหญ่ฉากเศร้าก็ทำได้ดี ไม่มีอไรชมไปมากกว่า นี่คือซีรีย์เเห่งปี",
    category: "Series",
    genre: "Drama",
    
    ratings: { excitement: 10, romance: 5, emotion: 10, overall: 9.8 },
  }, {
    src: images["2521"],
    title: "Twenty Five Twenty One (2521)",
    hot: "false",
    description:
      "ชีวิตในวัยรุ่นที่น่าจดจำ เรื่องที่มีคนเตือนว่าจบเหี้ย เเต่พอมาดูเเล้ว ทุกตัวละครมันมีเหตุผลทุกตัวเลย ไม่มีตัวไหนที่น่ารำคาญเลย เราได้เห็นพัฒนาการชัดมาก จากทุกตัว ทั้งนาฮีโด นางเอกที่ดูปุ๊กปิ๊กน่ารักมา เเล้วยิ่งพากย์ไทย เเล้วตัวงดูนิดนึงเเต่ขี้โวยวาย น่ารักมากๆ ได้เห็นพัฒนาการจากคนไม่ยอมคน จนมายอมโดยคนด่าเเล้วยิ้มได้ รวมถึง โกยูริม (เพื่อนนางเอก) ที่ยอมมาตลอด เเต่พอฉากบะหมี่ ก็ไม่ยอมคนจนได้ ก็หัดสู้ เเละพระเอกที่ตอนเเรกเกิดความผิดพลาด เเต่ก็สู้จนไม่ผิดพลาดอีก โคตรสุดยอด รวมถึงความรักที่relateกับชีวิตของผมด้วย มันเลยยิ่งอิน ต่างคนต่างยุ่ง เเละนิ่งห่างไกลกันไปเรื่อยๆจนทำให้เลิกรอ เเละท้อกันไปก่อน เเต่สุดท้ายก็จบเเบบที่นางเอกมาที่ๆทิ้งพระเอกที่เศร้าไว้มาตลอด เเละขอบคุณกัน เเละเเสดงให้เห็นว่า เเต่ละคนเป็นครูเเละบทเรียนของกันเเละกัน สุดยอดครับ สุดยอดจริงๆ",
    category: "Series",
    genre: "Romance",
    
    ratings: { excitement: 9, romance: 9.5, emotion: 10, overall: 9.7 },
  },
  {
    src: images[imageAlias.twenty],
    title: "20th Century Girl",
    hot: "false",
    description:
      "เป็นหนังเรื่องที่ดูหลังจาก ดูlovely runnerจบเเละมาเห็น เป็นหนังที่สะดุดตามาก เพราะดาราbigทั้งdemonเเละ  lovely runnerมารวมกัน มันจะมันขนาดไหน เเละก็สมคำร่ำลือ โคตรเศร้าโคตรมัน มันสนุกไปหมด ภายในสองชั่วโมงพาเราไปรู้จักกับพระนาง ความเข้าใจผิด เเละ รักกันโดยไม่รู้ว่าจะไปเเย่งของเพื่อน เเต่สุดท้ายรักกันนะ เเต่พระเอกตาย อันนี้เเม่งทำดิ่ง เเม่งโคตรหักมุมอ่ะ เเม่งพอดูจบกูยืนตบมือจริงๆนะ",
    category: "Movies",
    genre: "Romance",
    
    ratings: { excitement: 8.3, romance: 8.5, emotion: 10, overall: 9.5 },
  },
 
  {
    src: images["topgun"],
    title: "Top Gun",
    hot: "false",
    description:
      "เป็นหนังที่ดีที่สุดที่คิดว่าไม่มีอะไรชนะมันได้ด้านเนื้อเรื่องละนะ มันตราตรึงมาก ไม่มีอะไรอธิบายเยอะ มันสนุกจริงๆ",
    category: "Movies",
    genre: "Action",
    
    ratings: { excitement: 8.5, romance: 5.0, emotion: 10, overall: 9.3 },
  },  
  {
    src: images[imageAlias.alchemyofsoul],
    title: "Alchemy of Souls",
    hot: "false",
    description:
      "23/5/2568 พึ่งดูจบซีซั่นหนึ่งไป ดูตอนก่อนสอบปลายภาคปี1 สองวัน ตอนเเรกบอกเลยว่าไม่ค่อยน่าดู เพราะมันดูจักๆวงๆ เเต่ก็เหมือนกับหลายๆเรื่อง อยากดูเพราะโกยูจอง เเละลองเปิดใจ ตอนเเรกเริ่มดูซีซั่นสอง บอกเลยโคตรงง ต้องดูเป็นซีซั่นๆไปนะ ตอนเเรกก็กะจะพัก เเต่พอได้ยิน9arm spoilก็เริ่มอยากลองเปิดใจดู เลยลองดูสรุปเนื้อเรื่องคือ เขียนมาได้ดีมาก เเทบไม่มีตอนไหนง่วง มันดูเข้มข้น พระนางก็สวีทกันเเบบน่ารัก โดยเฉพาะนางเอง จองโซมิน อาจดูไม่ได้สวยเวอร์เเบบโกยูจองเเต่เป็นคนที่มองเเล้วไม่เบื่อ เล่นหน้าเล่นตา ทำseriesสนุกมาก ตัวร้ายก็ร้ายเเบบไม่ได้น่ารำคาญ ร้ายเเบบสนุก ไม่ได้ขนาดจิตใจมากนัก เเต่ตอนจบ บอกเลย ถ้าไม่มีseason 2รอนะ โคตรเหี้ย ตัดเเบบ ฉับ",
    category: "Series",
    genre: "Action",
    
    ratings: { excitement: 8.5, romance: 6.0, emotion: 8, overall: 9.3 },
  },
  {
    src: images[imageAlias.alchemyofsoul2],
    title: "Alchemy of Souls 2",
    hot: "false",
    description:
      "'ผลงานที่จะจดจำไปตลอดชีวิต' นี่คือคำพูดของโกยูจอง หลังเล่นหนังเรื่องนี้ ภาคต่อที่ต้องดูภาคหนึ่งมาก่อน ถึงจะเข้าใจ โกยูจองมาเเทนจองโซมิน ได้อย่างดีมาก ดีที่สุดเเล้ว เนื้อเรื่องจะค่อนข้างเดาทางง่าย เเละน่าเบื่อบ้าง เพราะว่าพระเอกเก่งสุดในเรื่อง เเต่ความสนุกก็อยู่ที่พระเอกเก่งจัดนี่เเหละ เเละน่าอึดอัดคือ กว่าจะรู้ว่าร่างเก่าของนักซูคือใคร ก็ปาไปตอนที่9เเล้ว เเต่มีฉากซึมๆอยู่ เช่น ผู้นำซงริม โดนเเทง อันนั้นก็ซึมๆ เเต่โดยรวมสนุกมากๆ น่าติดตามเแทบทุกตอน ที่พูดว่าเแทบก็เพราะบางตอน มันอาจจะไม่น่าดูต่อ สามารถหยุดได้เลย เเต่สามตอนท้ายหยุดไม่ได้ ตอนจบที่ดีมากๆ ต่างจากภาคเเรกที่จบโคตรเหี้ย ผมดูทั้งเรื่องจบภายในสองวัน 25/5/2568 พน.วันสอบ ",
    category: "Series",
    genre: "Action",
    
    ratings: { excitement: 10, romance: 8.5, emotion: 9, overall: 9.3 },
  },
  

  {
    src: images["hyperknife"],
    title: "Hyper Knife",
    hot: "false",
    description:
      "หมอสาว ตอนเเรกกะจะไม่ดูเพราะ คนเเก่กับนางเอกที่ไม่ค่อสะดุดตา เเต่พอดูดีๆ นางเอกเเม่งจิตๆ เเต่เสือกสวย ตัวเล็กๆ เเล้วก็มีdramaทำให้มันสนุก เเละอย่างที่บอกชอบตัวละครเก่ง นางเอกเเม่งก็โคตรเก่ง เก่งกว่าอาจารย์มันอีก เนื้อเรื่องก็น่าติดตาม ทำไมมันโกรธกันได้ขนาดนั้น อันนี้ดีจริงๆ ลองดู",
    category: "Series",
    genre: "Thriller",
    
    ratings: { excitement: 9.0, romance: 8.0, emotion: 7.0, overall: 9 },
  },
    {
    src: images["squidgame3"],
    title: "Squid Game 3",
    hot: "true",
    description:
      "ภาคจบ ของซีรีย์ที่ยิ่งใหญ่ที่สุด ของ Netflix เรื่องนี้มันเป็นเรื่องที่ เดายากมาก ทุกสิ่งที่เดา เเทบจะผิดหมดเลย มันช็อค เเละสนุก น่าติดตามต่อ เเต่มันยังติดอ ีกนิดๆจะสุดยอดละ เเต่ไม่รู้ว่าอะไร มันอาจจะเป็นเรื่องที่ยังไม่ข้นขนาดนั้น ส่วนตัวละครที่เเม่งโคตรสุดก็คือ ออนนี่ กับ เเม่เด็กน้อยนี่เเหละ มันดึงให้รู้ว่ายังมีคนดีๆอยู่ใน เรื่องนี้อยู่ สุดๆ เรื่องนี้จะเป็นเเฟรนไชส์ที่ที่อันดับต้นๆเเน่นอน",
    category: "Series",
    genre: "Drama",
    
    ratings: { excitement: 9, romance: 5, emotion: 10, overall: 8.5 },
  }, 
   {
    src: images["weakhero"],
    title: "Weak Hero Class 1",
    hot: "false",
    description:
      "ทนกระเเสไม่ไหว ภาคสองเเม่งโคตรดัง เเล้วพอดูตัวอย่าง มันมีระดับความเก่งที่ชัดมาก ชอบดูหนังที่มีคนเก่งเป็นrank มันดูน่าสนใจ เเละชอบทีมีคนเก่งเเบบเวอร์ๆอยู่ฝั่งพระเอก ฟิว solo levelingเเล้วคือพึ่งดูsolo leveling จบ เเล้วมาต่อ โคตรจะมัน มันสัสๆ ซูโฮเเม่งโคตรเท่ โคตรเเบกเรื่องนี้ ",
    category: "Series",
    genre: "Action",
    
    ratings: { excitement: 10, romance: 5, emotion: 8.5, overall: 8.1 },
  },
  {
    src: images["weakhero2"],
    title: "Weak Hero Class 2",
    hot: "false",
    description:
      "สิ่งที่ชอบภาคนี้มีเเค่เรื่องการเเบ่งrankเเหละ เเละความอินจากภาคที่เเล้ว นาเเบคจิน เเละก้ไอเเว่นtangurine โคตรเท่ ทำได้น้อยกว่าภาค1 เเต่ยังคงมาตรฐานความสนุกไว้ได้โอเค เเต่จบควายไปหน่อย รุมนาเเบคจิน เเบบหมาหมู่ เเต่ช่างมันบาคุเท่ดี ",
    category: "Series",
    genre: "Action",
    
    ratings: { excitement: 10, romance: 4, emotion: 8, overall: 7.3 },
  },
  
  {
    src: images["resident-playbook"],
    title: "Resident Playbook",
    hot: "false",
    description:
      "เป็นเรื่องเเรกที่bookวันมาของมันเป็นเดือนๆ วันที่15เมษายน ละเเม่งก็สมคำร่ำลือ ไม่เคยดูโกยูจองซักเรื่อง เเต่พอเห็นปุ๊ป รู้เลยทำไมเค้าถึงร่ำลือกันว่าสวยนักหนา มันโคตรจะสวยเลยสัส เนื้อเรื่องก็โอเค เเต่ละตัวละครมีบทที่น่าสนใจ คิมซาบุก็ถูกใจ พโยนัมกยอง มั้งนะ ก็สวยโอเค เเละก็จิ้นกันได้น่าสนใจดี",
    category: "Series",
    genre: "Drama",
  
    ratings: { excitement: 8, romance: 8.8, emotion: 8.5, overall: 8.5 },
  },

  {
    src: images["gyeongseong1"],
    title: "Gyeongseong Creature 1",
    hot: "false",
    description:
      "13/7/2568 สัตว์สยอง กยองซอง ภาคเเรก ด้านเนื้อเรื่อง น่าสนใจนะ ทำให้อยากดูต่อโอเคเลย เเต่ที่ surprise เลยคือฉากจิ้นที่เเบบ เยอะกว่าที่คิดมาก เคมีเข้ากันมากๆ เเละมีเหตุผลมาก เเต่ข้อเสียที่ทำให้เศร้าไม่สุดคือปูมหลังปูน้อยไปหน่อย ทำให้มันไม่ค่อยอิน เเต่มันน่าติดตามในช่วงท้ายๆ เเล้วเเบบผิดคาดมาก นึกว่านางเอกตายจริง ตัวร้ายก็ไม่ได้ร้ายปัญญาอ่อน มันเลวเเบบโง่ๆ ก็เลยไม่ขัดใจไรมาก โดยรวมสนุกใช้ได้ เเต่ยังไม่ถึงขั้น God",
    category: "Series",
    genre: "Action",
  
    ratings: { excitement: 8, romance: 7, emotion: 7, overall: 8 },
  },
      {
    src: images["parasite"],
    title: "Parasite",
    hot: "false",
    description:
      "ชนชั้นปรสิท ผมได้ดูเกี่ยวกับเรื่องของการถ่ายภาพของเรื่องนี้เเล้วมันน่าสนใจ คือมันจะมเส้นเเบ่งระหว่างคนรวยกับคนจนในเเทบจะทุกฉาก หนังเรื่องนี้ ไม่ใช่ Action เเต่มันกลับสนุก โดยผมชอบเรื่องนี้เพราะมันไม่มีฉากให้น่าหงุดหงิด ทุกอย่างสนุกไปตาม flow?ี่ควรจะเป็น ไม่มีการพลิกล็อคอะไรให้น่าหงุดหงิด เเละเเต่ละตัวละครก็ทำได้อย่างดี น่าติดตามไปตลอด สนุกดีมาก",
    category: "Movies",
    genre: "Drama",
  
    ratings: { excitement: 8, romance: 5, emotion: 6, overall: 8 },
  },
 
  {
    src: images["lovelyrunner"],
    title: "Lovely Runner",
    hot: "false",
    description:
      "ถ้ามันสนุกเหมือน3ตอนเเรกนะ มึงขึ้นไปอยู่กับwatermelonละสัส มึงdropเเบบน่าใจหายมาก ช่วงเเรกคือเวอณืจัด นางเอกเป้นfc เเละพระเอกตาย เลยย้อนเวลากลับไป สรุปพระเอกเเม่งเเอบชอบนางเอกมาตลอด ช่วยชีวืต เเบบบทโคตรเทพบุตร เเละก็นางเอกก็ควายได้ทุกตอน ก็เลยเริ่มเบื่อ เลยลงมาถึงอันดับนี้  พระนางทำให้เบื่อไวไปมาก",
    category: "Series",
    genre: "Romance",
  
    ratings: { excitement: 8, romance: 8.6, emotion: 7, overall: 7.5 },
  },
  {
    src: images[imageAlias.Undercover],
    title: "Undercover High School",
    hot: "false",
    description:
      "ตอนเเรกสนุกนะ สนุกสัสๆ อันดับโคตรสูง เเต่พอดูhyper knifeเเล้วมาดูอ่ะ มันคนละชั้นจริงๆนะ มันชัดเจนมาก เลยเริ่มรู้ระดับหนังก็ตอนนั้นเเหละ ดูซีนอาจารมณ์มา เเละมาดูตลกโปกฮามันชัดไป เเต่ความฟิน ได้อยู่ เเละก็ตอนจบพีคสัสๆ",
    category: "Series",
    genre: "Comedy",
  
    ratings: { excitement: 7, romance: 8.5, emotion: 7.5, overall: 7.3 },
  },
 
  {
    src: images[imageAlias.friendlyrivalry],
    title: "Friendly Rivalry",
    hot: "false",
    description:
      "ดุเอาความฟิน พระนาง เเละก็เพื่อนพระเอก โคตรสวย สวยเเบบสัสๆ อนาคตไกลเเน่ ส่วนเนื้อเรื่องก็averageจากwebtoon ไม่ได้wowอะไร มีเเค่มาดูความสวยของตัวละคร เเต่เเค่นี่ขนาดมีเเค่ความสวยนะ เเสดงว่าเเม่งสวยจริงๆเพื่อน",
    category: "Series",
    genre: "Thriller",
  
    ratings: { excitement: 7.0, romance: 7.5, emotion: 7.0, overall: 6.8 },
  },
  {
    src: images[imageAlias.mydearestnemesis],
    title: "My Dearest Nemesis",
    hot: "false",
    description:
      "A romantic enemies-to-lovers tale where two coworkers clash daily, only to discover a deeper connection beneath the tension.",
    category: "Series",
    genre: "Romance",
  
    ratings: { excitement: 5, romance: 8.0, emotion: 7, overall: 7.0 },
  },
  {
    src: images["nextdoor"],
    title: "Next Door",
    hot: "false",
    description:
      "A quirky drama about neighbors whose lives intertwine unexpectedly, revealing secrets and building unlikely bonds.",
    category: "Series",
    genre: "Comedy",
  
    ratings: { excitement: 7.5, romance: 8, emotion: 8, overall: 6.8 },
  },
  {
    src: images["startup"],
    title: "Start-Up",
    hot: "false",
    description:
      "A journey of young entrepreneurs chasing their dreams in the competitive world of tech startups, filled with ambition and romance.",
    category: "Series",
    genre: "Drama",
  
    ratings: { excitement: 10, romance: 9, emotion: 9, overall: 7.2 },
  },
  {
    src: images["tangurine"],
    title: "Tangurine",
    hot: "false",
    description:
      "A bittersweet coming-of-age story set in a small town, where a girl discovers friendship and loss under tangerine trees.",
    category: "Series",
    genre: "Drama",
  
    ratings: { excitement: 7, romance: 10, emotion: 10, overall: 7.0 },
  },
  {
    src: images["manhunt"],
    title: "The American Manhunt: Osama bin Laden",
    hot: "false",
    description:
      "นี่น่าจะเป็นหนังสารคดีเกี่ยวกับ 9/11 ที่ละเอียดที่สุดเเล้ว พาเราไปดูถึง อเมริกาหลังจากโดน 9/11 ว่าเค้าทำอย่างไรในการตามล่า อาชญากรหมายเลข 1 เเละ ทำให้เรารู้หลายมุม ทั้งการโดนด่าของหน่วยข่าวกรอง ความกดดันมากมายในการตามล่า เพราะบิน ลาเดน ไม่ใช่คนโง่ เเต่เค้าคืออัจฉริยะ ตั้งเเต่ บุช มาจนถึงโอบาม่า หนังดีๆเลย มี สามตอน เเละเข้มข้นทุกตอน",
    category: "Documentaries",
    genre: "Documentary",
  
    ratings: { excitement: 8, romance: 0, emotion: 8, overall: 7.0 },
  },
  {
    src: images["vagabond"],
    title: "Vagabond",
    hot: "false",
    description:
      "กวานชิก ซีรีย์ดี เป็นซีรีย์ที่ปราณีตมาก เเต่มันเศร้าไป ไม่ถูกใจผม มันดีนะ เเต่เเค่ไม่เข้ากับผม กวานชิก ทำได้น่าสงสาร เเละซึ้งมากๆ เเต่มันไม่ได้น่าติดตามต่อขนาดนั้น",
    category: "Series",
    genre: "Action",
  
    ratings: { excitement: 9, romance: 6.5, emotion: 6, overall: 7.3 },
  },
    {
    src: images["gyeongseong2"],
    title: "Gyeongseong Creature 2",
    hot: "false",
    description:
      "13/07/2568 สัตว์สยองภาคสอง โคตรจะมืด มืดสัสๆ ดูไม่รู้เรื่องปวดตามาก เเละเเม่งเเบบ ถ้าไม่ได้ดูภาค 1 นะ ภาคสองคือหนังเหี้ยๆเรื่องนึงเลย เเม่งเเทบจะไม่สนุกเลย นอกจากตอนที่ 5 ที่พระเอกได้พลังมา ทั้งหมดเเม่งล้วนเเล้วเเต่ งงๆ มันทำให้งงตั้งเเต่ตอนเเรกถึงตอนห้า เกินครึ่งคือเเบบ คิดในหัวว่า คืออะไร เกิดอะไรขึ้น มันไม่ได้อยากรู้ เเต่คิดว่า ทำไมมึงไม่รีบบอกซักที กูงงไปหมดเเล้ว เเละ ความจิ้นคือตอนเเรกคิดว่าจะมากกว่าภาค 1 สุดท้ายเเม่งน้อยสัส น้อยมาก กอดๆอย่างเดียว ตัวร้ายก็ไม่มีอะไรเลย น่าผิดหวัง ",
    category: "Series",
    genre: "Action",
  
    ratings: { excitement: 5, romance: 4, emotion: 5, overall: 5 },
  },
  {
    src: images["goodboy"],
    title: "Goodboy",
    hot: "false",
    description:
      "โห เหี้ยมาก ตอนเเรกดีๆน่าน่าสนใจ เเต่เเม่งเริ่มเบียว ไปสู้กับอำนาจมืดรัฐบาล เเละเเต่ละตัวมีปมทุกตัว เเละเเบบ กำลังต่อยงี้ มึงก็วิ๊งๆที่หัว เเละเป็นกันทุกตัว ปัญญาอ่อนมาก เเม่งเอาดูไปสามตอนพอ",
    category: "Series",
    genre: "Action",
  
    ratings: { excitement: 3, romance: 6, emotion: 2, overall: 4 },
  },
];

export default function Collections() {
  return movie.map((item, index) => ({
    ...item,
    rank: index + 1, // เพิ่ม rank อัตโนมัติตาม index (เริ่มจาก 1)
  }));
}