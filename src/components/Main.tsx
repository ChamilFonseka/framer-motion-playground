interface ChildProps {
    componentList: string[];
    setComponentName: (name: string) => void;
}

function Main({ setComponentName, componentList }: ChildProps) {
    return (
        <section>
            <h1 className="text-5xl font-extrabold bg-clip-text text-transparent w-fit mx-auto my-4"
                style={{ backgroundImage: 'linear-gradient( var(--rg-gradient-angle, 96deg), #ff94f1 7.63%, #978aff 37.94%, #00d2e5 65.23%, #8ffff8 92.12%)' }}
            >
                Make it move with Motion
            </h1>
            <div className="flex gap-4 mx-auto w-fit">
                {componentList.map((component, i) => (
                    <div className="flex gap-1" key={i}>
                        <input key={`input-${i}`} type="radio" id={component} name="components" value={component} onChange={(e) => setComponentName(e.target.value)} />
                        <label key={`label-${i}`} htmlFor={component}>{component}</label>
                    </div>
                ))}
            </div>
        </section>
    );
}
export default Main;