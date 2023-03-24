import axios from "axios";

export default axios.create({
   baseURL: "https://api.yelp.com/v3",
   headers: {
      Authorization: "Bearer j67cJYSeA49hgD3-MAyqYwam_G40GEWMT7F1_oNo1peNHFLB0FteCL27kAIacgQU7slmMgTAkysP4Dxt1Hzc2R469__5W8GV3Wq83f5gRE5vovffHmARxKvXncMcZHYx"
   }
});
