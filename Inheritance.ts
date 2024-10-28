interface User {
  userId:number
  userName:string
}
interface User { // reopening the interface
  githubToken:string
}
interface Guest {
  guestToken?:string // cant give default values
}
interface Admin extends User,Guest{
  role:'admin'|'hr'|'manager'
}

const zaid: Admin={userId:21,userName:'zaid',githubToken:'df320',role:'hr'}

// indirect way to give default value to interface
function createGuest(guest: Guest = {}): Guest {
  return { guestToken: "defaultToken", ...guest };
}

export {}