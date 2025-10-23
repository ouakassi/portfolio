function DarkUIHero() {
  return (
    <section className="dui-wrap" aria-label="Dark UI elements hero">
      <div className="dui-frame">
        {/* Window bar */}
        <div className="dui-titlebar" aria-hidden="true">
          <span className="dui-dot red" />
          <span className="dui-dot amber" />
          <span className="dui-dot green" />
          <div className="dui-search" />
        </div>

        {/* Content grid */}
        <div className="dui-grid">
          {/* Sidebar card */}
          <div className="dui-card dui-sidebar" aria-label="Sidebar mock">
            <div className="dui-line long" />
            <div className="dui-line" />
            <div className="dui-line" />
            <div className="dui-line short" />
          </div>

          {/* Middle rail with draggable style card */}
          <div className="dui-rail">
            <div className="dui-panel" />
            <div className="dui-floating" aria-label="Draggable card">
              <div className="dui-handle" />
            </div>
          </div>

          {/* Placeholder panel (dashed) */}
          <div className="dui-dashed" aria-label="Empty drop zone" />
        </div>
      </div>
    </section>
  );
}

function ApiBackendHero() {
  return (
    <section className="api-wrap" aria-label="APIs and backend hero">
      <div className="api-frame">
        {/* Title bar */}
        <div className="api-titlebar" aria-hidden="true">
          <span className="api-dot red" />
          <span className="api-dot amber" />
          <span className="api-dot green" />
          <div className="api-address" />
        </div>

        {/* 3-column layout */}
        <div className="api-grid">
          {/* Left: Endpoints list */}
          <aside className="api-card api-endpoints" aria-label="Endpoints">
            <div className="api-section-title">Endpoints</div>
            <div className="api-endpoint">
              <span className="chip get">GET</span>
              <span className="path">/api/users</span>
              <span className="status ok">200</span>
            </div>
            <div className="api-endpoint">
              <span className="chip post">POST</span>
              <span className="path">/api/users</span>
              <span className="status create">201</span>
            </div>
            <div className="api-endpoint">
              <span className="chip put">PUT</span>
              <span className="path">/api/users/:id</span>
              <span className="status ok">200</span>
            </div>
            <div className="api-endpoint">
              <span className="chip del">DEL</span>
              <span className="path">/api/users/:id</span>
              <span className="status warn">204</span>
            </div>
            <div className="api-endpoint dim">
              <span className="chip get">GET</span>
              <span className="path">/api/health</span>
              <span className="status ok">200</span>
            </div>
          </aside>

          {/* Center: Request/Response panels */}
          <main className="api-io" aria-label="Request and response">
            <div className="api-card api-request">
              <div className="api-section-title">Request</div>
              <div className="api-row">
                <span className="chip get">GET</span>
                <div className="api-url" />
                <div className="api-auth">Bearer ••••</div>
              </div>
              <div className="api-json">
                <div className="k key1" />
                <div className="v v1" />
                <div className="k key2" />
                <div className="v v2" />
                <div className="k key3" />
                <div className="v v3" />
              </div>
            </div>

            <div className="api-card api-response">
              <div className="api-section-title">Response</div>
              <div className="api-meta">
                <span className="badge ok">200 OK</span>
                <span className="badge time">38 ms</span>
                <span className="badge size">1.2 KB</span>
              </div>
              <div className="api-json json-dark">
                <div className="k key1" />
                <div className="v v1 v-green" />
                <div className="k key2" />
                <div className="v v2 v-blue" />
                <div className="k key3" />
                <div className="v v3 v-purple" />
              </div>
            </div>

            {/* Floating queue card */}
            <div className="api-floating" aria-label="Queue / worker">
              <div className="api-section-title small">Queue</div>
              <div className="queue">
                <div className="qitem ok" />
                <div className="qitem ok" />
                <div className="qitem warn" />
                <div className="qitem ok" />
                <div className="qitem dim" />
              </div>
              <div className="workers">
                <span className="badge worker">2 workers</span>
                <span className="badge load">CPU 41%</span>
              </div>
            </div>
          </main>

          {/* Right: Database / cache */}
          <aside className="api-card api-store" aria-label="Store">
            <div className="api-section-title">Store</div>
            <div className="kv">
              <span className="key" />
              <span className="val" />
            </div>
            <div className="kv">
              <span className="key" />
              <span className="val long" />
            </div>
            <div className="kv">
              <span className="key short" />
              <span className="val" />
            </div>
            <div className="divider" />
            <div className="cache">
              <span className="badge cache-on">Cache HIT</span>
              <span className="badge ttl">TTL 57s</span>
            </div>
          </aside>
        </div>
      </div>
    </section>
  );
}

function CloudDeployHero() {
  return (
    <section className="cd-wrap" aria-label="Clouds and deployments hero">
      <div className="cd-frame">
        {/* Window bar */}
        <div className="cd-titlebar" aria-hidden="true">
          <span className="cd-dot red" />
          <span className="cd-dot amber" />
          <span className="cd-dot green" />
          <div className="cd-address" />
        </div>

        {/* Grid: pipeline | envs | cloud */}
        <div className="cd-grid">
          {/* Left: CI/CD pipeline */}
          <aside className="card pipeline" aria-label="CI/CD pipeline">
            <div className="sec-title">Pipeline</div>

            <div className="step ok">
              <span className="pill build">Build</span>
              <div className="bar" />
              <span className="badge good">2m 14s</span>
            </div>

            <div className="step ok">
              <span className="pill test">Test</span>
              <div className="bar mid" />
              <span className="badge info">128 passed</span>
            </div>

            <div className="step ok">
              <span className="pill image">Image</span>
              <div className="bar short" />
              <span className="badge good">v1.12.3</span>
            </div>

            <div className="step">
              <span className="pill deploy">Deploy</span>
              <div className="bar tiny" />
              <span className="badge warn">awaiting</span>
            </div>

            <div className="divider" />

            <div className="meta">
              <span className="chip branch">main</span>
              <span className="chip pr">PR #248</span>
              <span className="chip commit">c7a9e2f</span>
            </div>
          </aside>

          {/* Center: Environments flow */}
          <main className="card envs" aria-label="Environments">
            <div className="sec-title">Environments</div>

            <div className="env-row">
              <div className="env dev">
                <div className="env-top">
                  <span className="dot ok" />
                  <span className="env-name">Dev</span>
                  <span className="badge good">Healthy</span>
                </div>
                <div className="env-body">
                  <div className="slot" />
                  <div className="slot" />
                </div>
              </div>

              <div className="flow-arrow" aria-hidden="true">
                <span className="flow-line" />
              </div>

              <div className="env stage">
                <div className="env-top">
                  <span className="dot ok" />
                  <span className="env-name">Stage</span>
                  <span className="badge info">Warm</span>
                </div>
                <div className="env-body">
                  <div className="slot" />
                  <div className="slot short" />
                </div>
              </div>

              <div className="flow-arrow" aria-hidden="true">
                <span className="flow-line" />
              </div>

              <div className="env prod">
                <div className="env-top">
                  <span className="dot ok" />
                  <span className="env-name">Prod</span>
                  <span className="badge good">Live</span>
                </div>
                <div className="env-body">
                  <div className="slot long" />
                  <div className="slot" />
                </div>
              </div>
            </div>

            {/* Floating release card */}
            <div className="floating release" aria-label="Release">
              <div className="sec-title tiny">Release</div>
              <div className="rel-row">
                <span className="chip tag">v1.12.3</span>
                <span className="badge time">rolled 3m ago</span>
              </div>
              <div className="rel-row">
                <span className="chip strategy">Blue/Green</span>
                <span className="badge size">3 pods</span>
              </div>
              <div className="rel-bar" />
            </div>
          </main>

          {/* Right: Cloud resources */}
          <aside className="card cloud" aria-label="Cloud resources">
            <div className="sec-title">Cloud</div>

            <div className="cloud-item svc">
              <div className="icon bubble" />
              <div className="text">
                <div className="t1" />
                <div className="t2" />
              </div>
              <span className="badge good">OK</span>
            </div>

            <div className="cloud-item fn">
              <div className="icon bolt" />
              <div className="text">
                <div className="t1 short" />
                <div className="t2" />
              </div>
              <span className="badge info">Cold→Warm</span>
            </div>

            <div className="cloud-item bucket">
              <div className="icon box" />
              <div className="text">
                <div className="t1" />
                <div className="t2 long" />
              </div>
              <span className="badge good">S3</span>
            </div>

            <div className="divider" />

            <div className="cloud-meta">
              <span className="chip region">eu-west-3</span>
              <span className="chip edges">3 edges</span>
            </div>
          </aside>
        </div>
      </div>
    </section>
  );
}

function UiSystemHero() {
  return (
    <section className="ui-wrap" aria-label="UI system and components hero">
      <div className="ui-frame">
        {/* Title bar */}
        <div className="ui-titlebar" aria-hidden="true">
          <span className="ui-dot red" />
          <span className="ui-dot amber" />
          <span className="ui-dot green" />
          <div className="ui-search" />
        </div>

        {/* 3-column layout */}
        <div className="ui-grid">
          {/* Left: Component library palette */}
          <aside className="card palette" aria-label="Component library">
            <div className="sec-title">Components</div>

            <div className="comp-row">
              <div className="comp chip">Button</div>
              <div className="comp chip alt">Badge</div>
              <div className="comp chip">Tag</div>
            </div>

            <div className="comp-block">
              <div className="btn btn-primary" />
              <div className="btn btn-ghost" />
              <div className="btn btn-outline" />
            </div>

            <div className="comp-block">
              <div className="field">
                <div className="label" />
                <div className="input" />
              </div>
              <div className="field">
                <div className="label short" />
                <div className="input" />
              </div>
            </div>

            <div className="comp-block">
              <div className="toggle">
                <span />
              </div>
              <div className="checkbox">
                <span />
              </div>
              <div className="radio">
                <span />
              </div>
            </div>
          </aside>

          {/* Center: Live preview artboard */}
          <main className="card preview" aria-label="Preview artboard">
            <div className="sec-title">Preview</div>

            <div className="toolbar">
              <div className="tab on" />
              <div className="tab" />
              <div className="spacer" />
              <div className="chip tiny">960×600</div>
            </div>

            <div className="screen">
              <div className="sidebar">
                <div className="skl long" />
                <div className="skl" />
                <div className="skl" />
                <div className="skl short" />
              </div>
              <div className="content">
                <div className="card-block" />
                <div className="card-row">
                  <div className="card-mini" />
                  <div className="card-mini" />
                  <div className="card-mini" />
                </div>
              </div>
            </div>

            {/* Floating inspector */}
            <div className="floating insp" aria-label="Inspector">
              <div className="sec-title tiny">Inspector</div>
              <div className="row">
                <span className="pill">Padding</span>
                <div className="bar" />
                <span className="badge">16</span>
              </div>
              <div className="row">
                <span className="pill">Radius</span>
                <div className="bar mid" />
                <span className="badge">12</span>
              </div>
              <div className="row">
                <span className="pill">Shadow</span>
                <div className="bar short" />
                <span className="badge">md</span>
              </div>
            </div>
          </main>

          {/* Right: Design tokens */}
          <aside className="card tokens" aria-label="Design tokens">
            <div className="sec-title">Tokens</div>

            <div className="tok-group">
              <div className="t-chip">Colors</div>
              <div className="swatches">
                <span className="sw s1" />
                <span className="sw s2" />
                <span className="sw s3" />
                <span className="sw s4" />
                <span className="sw s5" />
              </div>
            </div>

            <div className="tok-group">
              <div className="t-chip">Radii</div>
              <div className="radii">
                <span className="r r2" />
                <span className="r r3" />
                <span className="r r4" />
              </div>
            </div>

            <div className="tok-group">
              <div className="t-chip">Typography</div>
              <div className="type">
                <span className="ty h" />
                <span className="ty p" />
                <span className="ty s" />
              </div>
            </div>
          </aside>
        </div>
      </div>
    </section>
  );
}
