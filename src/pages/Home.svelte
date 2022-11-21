<script>
	import {
		Canvas,
		Scene,
		PerspectiveCamera,
		DirectionalLight,
		AmbientLight,
		SphereBufferGeometry,
		Mesh,
		MeshStandardMaterial,
		WebGLRenderer,
	} from "svelthree";

	let cubeGeometry = new SphereBufferGeometry(1, 10, 20);
	let cubeMaterial = new MeshStandardMaterial();

	const rotateCube = obj => {
		let rAF = 0;
		let doRotate = false;

		function onStart() {
			startRotating();
		}

		function startRotating() {
			doRotate = true;
			rAF = requestAnimationFrame(rotate);
		}

		function rotate() {
			if (doRotate) {
				obj.rotation.x += 0.01;
				obj.rotation.y += 0.01;
				obj.rotation.z += 0.01;
				rAF = requestAnimationFrame(rotate);
			}
		}

		function onDestroy() {
			doRotate = false;
			cancelAnimationFrame(rAF);
		}

		return {
			onStart: onStart,
			onDestroy: onDestroy,
		};
	};
</script>

<div class="static sm:relative sm:flex-grow sm:h-full">
	<div class="static sm:absolute inset-0">
		<main class="flex flex-col justify-between items-center px-10 bg-primary-main">
			<section
				class="flex flex-col lg:flex-row w-full xl:max-w-[90%] justify-between items-center h-full p-10 gap-10">
				<div>
					<h1 class="font-semibold text-5xl leading-normal mb-2">
						Nossa energia não pode <br /> ir para o <span class="text-primary-darker">lixo.</span>
					</h1>
					<h2 class="text-xl leading-normal">
						Valorizamos a transparência, acesse os dados de consumo <br /> energético da Instituição Federal
						de Alagoas.
					</h2>
				</div>
				<div>
					<Canvas let:sti w={350} h={350} interactive>
						<Scene {sti} let:scene id="scene1" props={{ background: 0x9fe3ba }}>
							<PerspectiveCamera {scene} id="cam1" pos={[0, 0, 3]} lookAt={[0, 0, 0]} />
							<AmbientLight {scene} intensity={1.25} />
							<DirectionalLight {scene} pos={[3, 3, 3]} />

							<Mesh
								{scene}
								geometry={cubeGeometry}
								material={cubeMaterial}
								mat={{ roughness: 0.5, metalness: 0.5, color: 0xff3e00 }}
								pos={[0, 0, 0]}
								scale={[1, 1, 1]}
								animation={rotateCube}
								interact
								on:pointermove={event => {
									let obj = event.detail.target;
									obj.rotation.x += 0.01;
									obj.rotation.y += 0.01;
									obj.rotation.z += 0.01;
								}}
								aniauto />
						</Scene>

						<WebGLRenderer {sti} sceneId="scene1" camId="cam1" config={{ antialias: true, alpha: true }} />
					</Canvas>
				</div>
			</section>
			<section
				class="flex flex-col lg:flex-row justify-between items-center gap-10 w-full lg:h-52 p-14 bg-white shadow-md rounded-tl-[30px] rounded-tr-[30px]">
				<h2 class="font-semibold text-3xl leading-normal">
					Esta ferramenta torna público os dados de <br /> consumo de energia do IFAL, consulte agora:
				</h2>
				<div class="flex flex-col gap-2">
					<a class="rounded-sm px-6 py-1 bg-primary-dark text-white text-xl text-center" href="/dados"
						>Veja os dados</a>
					<a class="rounded-sm px-6 py-1 bg-gray-500 text-white text-xl text-center" href="/contato"
						>Fale conosco</a>
				</div>
			</section>
		</main>
	</div>
</div>
