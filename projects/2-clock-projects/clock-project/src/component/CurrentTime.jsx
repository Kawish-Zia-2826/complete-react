function CurrentTime() {
  const d = new Date();

  return <div>
   this is the time : {d.toLocaleString()}
  </div>
}

export default CurrentTime;