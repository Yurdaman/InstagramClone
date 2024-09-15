export default function getInitials(fullname) {
  const match = fullname.match(/\b(\w)/g);
  return match ? match.join("") : "";
}
