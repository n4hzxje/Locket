// ========= ID ========= //
const mapping = {
  '%E8%BD%A6%E7%A5%A8%E7%A5%A8': ['vip+watch_vip'],
  'Locket': ['Gold']
};
// =========   Phần cố định  ========= // 
// =========  @N4hzxje ========= // 
var ua=$request.headers["User-Agent"]||$request.headers["user-agent"],obj=JSON.parse($response.body);obj.Attention="Hello Guys";var N4hzxje={is_sandbox:!1,ownership_type:"PURCHASED",billing_issues_detected_at:null,period_type:"normal",expires_date:"2099-12-18T01:04:17Z",grace_period_expires_date:null,unsubscribe_detected_at:null,original_purchase_date:"2024-08-01T01:04:18Z",purchase_date:"2024-08-01T01:04:17Z",store:"app_store"},N4hzxje={grace_period_expires_date:null,purchase_date:"2024-08-01T01:04:17Z",product_identifier:"com.N4hzxje.premium.yearly",expires_date:"2099-12-18T01:04:17Z"};const match=Object.keys(mapping).find(e=>ua.includes(e));if(match){let[e,s]=mapping[match];s?(N4hzxje.product_identifier=s,obj.subscriber.subscriptions[s]=N4hzxje):obj.subscriber.subscriptions["com.N4hzxje.premium.yearly"]=N4hzxje,obj.subscriber.entitlements[e]=N4hzxje}else obj.subscriber.subscriptions["com.N4hzxje.premium.yearly"]=N4hzxje,obj.subscriber.entitlements.pro=N4hzxje;$done({body:JSON.stringify(obj)});
