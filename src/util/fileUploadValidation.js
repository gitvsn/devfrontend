export const ALLOWED_TYPE = [

  'jpeg',
  'jpg',
  'png',
  'svg',
  'pdf',
]


export function checkTypeFile(files, allowedTypes = ALLOWED_TYPE) {
  return Array.from(files).every(file => {
    let fileName = file.name;
    let extensions = fileName.split('.').pop()
    return allowedTypes.includes(extensions)
  })
}

export function checkSizeFile(files, allowedSize ) { // 10mb

  return Array.from(files).every(file => {
    let fileSize = file.size;
    return allowedSize || 10 >= fileSize / 1024 / 1024
  })
}
export function getBase64(file, cb) {
   var reader = new FileReader();
   reader.readAsDataURL(file);
   reader.onload = function () {
     cb(reader.result)
   };
   reader.onerror = function (error) {
   };
}
