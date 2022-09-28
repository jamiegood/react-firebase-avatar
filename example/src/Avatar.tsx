export default function Avatar({ photoURL }: { photoURL: string }) {
  return <img src={photoURL} alt="Avatar" />;
}
