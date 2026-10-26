const features = [
  {
    title: 'Real-time code viewing',
    description: 'Every keystroke, cursor, and selection streams instantly to the room.',
  },
  {
    title: 'Voice & video chat',
    description: 'Low-latency audio and video built in - no second tab, no context switch.',
  },
  {
    title: 'Permission-based collab',
    description: 'Grant write access per learner, revoke it in one keystroke.',
  },
  {
    title: 'Shared project mode',
    description: 'One filesystem, one terminal, one running dev server for the whole room.',
  }
];

const Features = () => {
  return (
    <section id="features" className="w-full text-black bg-white">
      <h2 className="text-[20px] font-bold border-b-2 border-black pb-4 mb-4">
        Features
      </h2>

      <div className="w-full overflow-x-auto">
        <table className="w-full border-collapse border-2 border-black text-[14px] text-left">
          <thead>
            <tr className="border-b-2 border-black bg-white font-bold">
              <th className="border-2 border-black p-2 w-12 text-center">#</th>
              <th className="border-2 border-black p-2 w-1/3">Feature</th>
              <th className="border-2 border-black p-2">Description</th>
            </tr>
          </thead>
          <tbody>
            {features.map((feature, index) => (
              <tr key={index} className="border-b-2 border-black bg-white">
                <td className="border-2 border-black p-2 text-center font-bold">{index + 1}</td>
                <td className="border-2 border-black p-2 font-bold">{feature.title}</td>
                <td className="border-2 border-black p-2">{feature.description}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </section>
  );
};

export default Features;
