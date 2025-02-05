const Ziggy = {"url":"http:\/\/localahost","port":null,"defaults":{},"routes":{"debugbar.openhandler":{"uri":"_debugbar\/open","methods":["GET","HEAD"]},"debugbar.clockwork":{"uri":"_debugbar\/clockwork\/{id}","methods":["GET","HEAD"],"parameters":["id"]},"debugbar.assets.css":{"uri":"_debugbar\/assets\/stylesheets","methods":["GET","HEAD"]},"debugbar.assets.js":{"uri":"_debugbar\/assets\/javascript","methods":["GET","HEAD"]},"debugbar.cache.delete":{"uri":"_debugbar\/cache\/{key}\/{tags?}","methods":["DELETE"],"parameters":["key","tags"]},"debugbar.queries.explain":{"uri":"_debugbar\/queries\/explain","methods":["POST"]},"sanctum.csrf-cookie":{"uri":"sanctum\/csrf-cookie","methods":["GET","HEAD"]},"user.industri.show":{"uri":"industri-pariwisata\/{industri}","methods":["GET","HEAD"],"parameters":["industri"]},"user.destinasi.show":{"uri":"destinasi\/{destinasi}","methods":["GET","HEAD"],"parameters":["destinasi"],"bindings":{"destinasi":"id"}},"user.profil":{"uri":"profil","methods":["GET","HEAD"]},"user.akomodasi":{"uri":"akomodasi","methods":["GET","HEAD"]},"profile.edit":{"uri":"profile","methods":["GET","HEAD"]},"profile.update":{"uri":"profile","methods":["PATCH"]},"profile.destroy":{"uri":"profile","methods":["DELETE"]},"dashboard":{"uri":"dashboard","methods":["GET","HEAD"]},"admin.dashboard":{"uri":"admin\/dashboard","methods":["GET","HEAD"]},"admin.data.hotel":{"uri":"admin\/data\/hotel","methods":["GET","HEAD"]},"admin.data.destinasi":{"uri":"admin\/data\/destinasi","methods":["GET","HEAD"]},"admin.data-managemen.index":{"uri":"admin\/data-managemen","methods":["GET","HEAD"]},"admin.data-managemen.create":{"uri":"admin\/data-managemen\/create","methods":["GET","HEAD"]},"admin.hotel.index":{"uri":"admin\/hotel","methods":["GET","HEAD"]},"admin.hotel.create":{"uri":"admin\/hotel\/create","methods":["GET","HEAD"]},"admin.hotel.store":{"uri":"admin\/hotel","methods":["POST"]},"admin.hotel.show":{"uri":"admin\/hotel\/{hotel}","methods":["GET","HEAD"],"parameters":["hotel"],"bindings":{"hotel":"id"}},"admin.hotel.edit":{"uri":"admin\/hotel\/{hotel}\/edit","methods":["GET","HEAD"],"parameters":["hotel"],"bindings":{"hotel":"id"}},"admin.hotel.update":{"uri":"admin\/hotel\/{hotel}","methods":["PUT","PATCH"],"parameters":["hotel"],"bindings":{"hotel":"id"}},"admin.hotel.destroy":{"uri":"admin\/hotel\/{hotel}","methods":["DELETE"],"parameters":["hotel"]},"admin.destinasi.index":{"uri":"admin\/destinasi","methods":["GET","HEAD"]},"admin.destinasi.create":{"uri":"admin\/destinasi\/create","methods":["GET","HEAD"]},"admin.destinasi.store":{"uri":"admin\/destinasi","methods":["POST"]},"admin.destinasi.show":{"uri":"admin\/destinasi\/{destinasi}","methods":["GET","HEAD"],"parameters":["destinasi"]},"admin.destinasi.edit":{"uri":"admin\/destinasi\/{destinasi}\/edit","methods":["GET","HEAD"],"parameters":["destinasi"],"bindings":{"destinasi":"id"}},"admin.destinasi.update":{"uri":"admin\/destinasi\/{destinasi}","methods":["PUT","PATCH"],"parameters":["destinasi"],"bindings":{"destinasi":"id"}},"admin.destinasi.destroy":{"uri":"admin\/destinasi\/{destinasi}","methods":["DELETE"],"parameters":["destinasi"]},"register":{"uri":"register","methods":["GET","HEAD"]},"login":{"uri":"login","methods":["GET","HEAD"]},"password.request":{"uri":"forgot-password","methods":["GET","HEAD"]},"password.email":{"uri":"forgot-password","methods":["POST"]},"password.reset":{"uri":"reset-password\/{token}","methods":["GET","HEAD"],"parameters":["token"]},"password.store":{"uri":"reset-password","methods":["POST"]},"verification.notice":{"uri":"verify-email","methods":["GET","HEAD"]},"verification.verify":{"uri":"verify-email\/{id}\/{hash}","methods":["GET","HEAD"],"parameters":["id","hash"]},"verification.send":{"uri":"email\/verification-notification","methods":["POST"]},"password.confirm":{"uri":"confirm-password","methods":["GET","HEAD"]},"password.update":{"uri":"password","methods":["PUT"]},"logout":{"uri":"logout","methods":["POST"]},"storage.local":{"uri":"storage\/{path}","methods":["GET","HEAD"],"wheres":{"path":".*"},"parameters":["path"]}}};
if (typeof window !== 'undefined' && typeof window.Ziggy !== 'undefined') {
  Object.assign(Ziggy.routes, window.Ziggy.routes);
}
export { Ziggy };
