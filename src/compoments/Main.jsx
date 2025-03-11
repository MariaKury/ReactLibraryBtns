import Button from "./Button";

export default function Main() {
  return (
    <main className="component-showcase">
      <section className="component-group">
        <h2>Variants</h2>
        <div className="component-card">
          <Button variant="primary" text="Primary" />
          <Button variant="secondary" text="Secondary" />
          <Button variant="danger" text="Danger" />
          <Button variant="gradient" text="Gradient" />
          <Button variant="outline" text="Outline" />
        </div>
      </section>

      <section className="component-group">
        <h2>Sizes</h2>
        <div className="component-card">
          <Button size="small" text="Small" />
          <Button size="medium" text="Medium" />
          <Button size="large" text="Large" />
        </div>
      </section>

      <section className="component-group">
        <h2>Button States</h2>
        <div className="component-card">
          <Button text="Default" />
          <Button isDisabled text="Disabled" />
        </div>
      </section>

      <section className="component-group">
        <h2>Full Width Button</h2>
        <div className="component-card">
          <Button text="Full Width" variant="secondary" fullWidth />
        </div>
      </section>
    </main>
  );
}
