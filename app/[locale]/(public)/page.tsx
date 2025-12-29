import { auth } from "@/lib/auth"
import { headers } from "next/headers"
import { logout } from "@/components/UserCreate/userAction"

import LoginForm from "@/components/UserCreate/LoginForm"
import {
    getTranslations,
    setRequestLocale,
} from "next-intl/server"

export default async function Home({
    params,
}: {
    params: Promise<Record<string, string>>
}) {
    const { locale } = await params
    setRequestLocale(locale)

    const session = await auth.api.getSession({
        headers: await headers(),
    })
    const t = await getTranslations("HomePage")

    if (!session) {
        return (
            <>
                {t("title")}
                <h1>
                    Lorem ipsum dolor sit amet, consectetur
                    adipisicing elit. Atque, veniam.
                </h1>{" "}
                <h1>
                    Lorem ipsum dolor sit amet, consectetur
                    adipisicing elit. Ad aliquid at commodi
                    consequuntur culpa delectus distinctio,
                    dolor est excepturi explicabo fuga
                    fugiat, illo inventore, iusto molestiae
                    necessitatibus quae quia voluptate. Ad
                    distinctio libero tempore temporibus
                    voluptates? A assumenda debitis
                    doloremque doloribus earum excepturi
                    itaque, praesentium soluta sunt!
                    Accusantium aliquid delectus dolore
                    dolores eius enim, impedit iure, iusto
                    minima molestiae mollitia nihil nostrum
                    qui quos sapiente sequi vero. Ab
                    adipisci aliquam aliquid animi beatae
                    cumque dicta dignissimos dolore dolorem,
                    exercitationem facere hic illo incidunt
                    iusto, labore libero minus molestias nam
                    neque nesciunt nobis optio pariatur
                    perferendis quia quisquam quos saepe
                    vitae.
                </h1>
                <LoginForm />
            </>
        )
    }
    return (
        <div
            className={
                "p-4 flex items-center flex-col justify-center gap-4"
            }
        >
            <h1>
                Lorem ipsum dolor sit amet, consectetur
                adipisicing elit. Cupiditate, sapiente.
            </h1>
            <h1>
                Lorem ipsum dolor sit amet, consectetur
                adipisicing elit. Accusantium asperiores
                consequatur dolore facere magnam
                necessitatibus rem repudiandae tenetur totam
                vitae. Ad deserunt eligendi ipsum iusto,
                quis ratione saepe? Aspernatur consectetur
                corporis cum ducimus enim eos eveniet
                excepturi expedita explicabo, fugit illum
                incidunt ipsa ipsum laboriosam, magnam
                minus, numquam obcaecati quam quidem
                repellendus saepe totam vitae voluptate?
                Culpa ea expedita nisi obcaecati odio
                quaerat. Atque beatae corporis culpa
                doloremque ducimus earum esse est et facere
                fugit hic iste laudantium libero maxime
                molestiae mollitia nesciunt nisi, possimus
                praesentium, quas quo recusandae sint velit!
                Dolor ipsam iure molestias nostrum quia sit!
                Dolores iusto necessitatibus possimus! Amet
                consequuntur deserunt, doloribus ducimus
                error ex id illo incidunt ipsa maiores modi
                nam obcaecati omnis porro quae quibusdam,
                rem reprehenderit unde veritatis voluptas.
                Commodi consequatur dignissimos, dolore
                dolorem doloremque eum excepturi
                exercitationem fugit hic illum in, inventore
                ipsam iste labore minima mollitia
                necessitatibus nesciunt nobis porro quam
                quas ratione sapiente sint, soluta
                temporibus veritatis voluptatibus. Ab alias
                animi assumenda eligendi, facere harum illo
                iure, minima molestias nihil, nisi numquam
                officia quisquam suscipit tenetur voluptas
                voluptatem! Adipisci aliquid amet assumenda
                culpa cupiditate deleniti deserunt
                distinctio dolor eius est ex exercitationem
                fugiat harum illum in incidunt labore
                laboriosam laborum minima nam nesciunt,
                numquam odit omnis perferendis perspiciatis
                placeat porro quasi quibusdam quisquam quos,
                repellat repellendus reprehenderit sapiente,
                sed sit ullam veritatis. Aut cupiditate
                debitis deleniti dolorem doloremque dolores
                earum excepturi exercitationem, facere id in
                inventore laborum maxime neque nesciunt,
                nihil nostrum pariatur quaerat quas quasi
                ratione rerum sit temporibus ut vero vitae
                voluptates. Ab aliquam aut autem, cumque
                deleniti dolores ea error exercitationem
                facere ipsam labore minima minus quam quidem
                tenetur velit veritatis vero, voluptatibus.
                Ab, asperiores autem beatae consectetur
                debitis deleniti distinctio dolor doloremque
                dolorum ex fugit iusto laborum pariatur quam
                quibusdam tempore vero voluptatum! Ab animi
                architecto asperiores autem dolorem
                doloribus dolorum ducimus ea eos, esse
                excepturi facilis illo, in ipsam laborum
                magni odit quae quisquam sint, voluptates?
                Cum dignissimos enim et facilis fugit libero
                magnam nihil sunt ullam, voluptatum!
                Assumenda enim in libero maiores nemo nisi
                odit optio, quas. Debitis dolorum ipsam nam
                nesciunt ratione reiciendis rem voluptatem!
                Cumque doloremque, dolorum eligendi fuga
                maxime non quaerat quibusdam quis quos
                repellat tempore voluptas. Cum eaque eius
                eum hic molestias nam, nostrum porro vero.
                Aliquid assumenda at cupiditate fugiat
                itaque modi omnis perferendis ratione
                similique voluptas? Atque consectetur
                debitis deserunt iusto, laudantium
                necessitatibus reiciendis. A at dolores
                fugit ipsa, itaque laboriosam necessitatibus
                nulla perferendis praesentium quae
                reprehenderit rerum soluta temporibus.
                Aliquid animi at autem, corporis culpa
                dolorem doloremque ducimus et excepturi
                expedita, facere fugit ipsa officia,
                officiis pariatur placeat quas quia quidem
                reprehenderit sunt? Adipisci alias aliquam
                aperiam asperiores atque autem consequuntur,
                corporis debitis, dolor dolorum eaque
                explicabo fugit id illo illum, labore libero
                magni modi nam necessitatibus neque nobis
                numquam quos repellat reprehenderit tenetur
                totam vero? Atque commodi cum dolor dolorem
                eos eveniet, expedita fuga id incidunt
                laboriosam, nisi nobis non nulla obcaecati
                odio pariatur possimus recusandae reiciendis
                reprehenderit repudiandae saepe sint
                temporibus voluptates. Accusamus asperiores
                commodi cupiditate delectus deserunt, eius
                fugiat hic nihil quo rerum sapiente
                similique sint. Doloremque neque omnis
                reiciendis reprehenderit? Eum minima, odio?
                Blanditiis commodi consequuntur cum ex iure
                minus molestias, officia quas reiciendis?
                Accusantium architecto aspernatur aut beatae
                consectetur corporis deleniti dolores
                doloribus enim esse fugit harum impedit iure
                iusto magnam maiores modi nam nemo neque non
                obcaecati officia pariatur praesentium quas
                quasi quos recusandae reprehenderit rerum
                similique soluta ullam, ut vitae voluptatem?
                Iusto laboriosam minima possimus! Cumque
                dolorum fugiat illo, laudantium maxime
                mollitia nemo recusandae suscipit.
                Blanditiis, culpa cupiditate non provident
                quia quo similique vitae voluptatibus.
                Architecto cum cupiditate eaque explicabo
                fugiat id maxime obcaecati porro sequi
                veritatis? A harum iste praesentium quas
                repellat suscipit voluptatum! Asperiores
                cumque cupiditate dolor dolorum enim iusto
                laboriosam magni, maxime molestias neque
                obcaecati praesentium quae quam quas quos
                repellat repellendus sapiente. Accusamus
                accusantium, aut, blanditiis consequuntur
                cum ea et in ipsum necessitatibus nesciunt
                quae quas qui, recusandae repellendus
                tenetur? Alias atque cumque cupiditate eos
                harum illo, in, inventore itaque iusto
                maiores minima nihil numquam provident quasi
                tenetur unde voluptate! Ab cumque, deleniti
                doloribus expedita id impedit ipsam labore
                nobis odio perferendis quia soluta tempore
                vero. Dolores eaque facilis laboriosam
                possimus sapiente tempore vero voluptates.
                At cumque dolorem doloremque nihil placeat
                quasi quidem tempore, unde vel. A cum porro
                tempora temporibus. Deserunt eius fuga
                necessitatibus numquam officiis. A ab animi
                at beatae consequatur cumque dolor earum
                eligendi excepturi fuga impedit in ipsum
                iste labore libero nam natus, nihil nobis
                nostrum nulla odio pariatur, possimus
                provident, quae quas recusandae rerum sequi
                sit sunt suscipit tempore temporibus vero
                voluptates. Ab alias aut cupiditate
                explicabo facilis ipsum mollitia, provident
                repellendus? Accusamus accusantium
                consectetur, corporis debitis, ea eaque et
                eveniet ex impedit in laborum magni maxime
                odit omnis porro quis reprehenderit sunt
                velit vero vitae? Ab at consequatur cumque
                dicta dolore eum exercitationem impedit
                minus numquam odio perferendis, placeat
                quisquam, recusandae reprehenderit sed totam
                vero! Aliquid architecto aspernatur corporis
                cum, cupiditate dolorum ea excepturi, ipsa
                laboriosam magni minima nemo nobis omnis
                pariatur, possimus praesentium quaerat
                quibusdam quidem quod quos repellendus
                sapiente sed sequi unde vero voluptatem
                voluptatibus? Ad aliquid animi aspernatur
                dolor dolorem dolorum eos iure molestias,
                non nulla numquam, officiis perferendis quia
                repellendus sequi similique, vel voluptatum.
                Aliquam amet aperiam consequuntur dolore
                fugit, hic illum ipsa libero numquam
                praesentium, quae quibusdam quidem quisquam
                tempore, voluptatum. Ab, aliquam asperiores
                assumenda, atque aut deserunt dicta
                dignissimos enim eos exercitationem labore
                laudantium officia quaerat quas qui rerum
                totam vero. Accusamus consequuntur est
                inventore magnam optio quisquam? Ad delectus
                doloribus illum magnam placeat quam quas
                quibusdam recusandae saepe voluptate?
                Aspernatur et itaque iure, modi nam odio
                provident. Ad dolor dolorem explicabo
                nesciunt quasi repellendus tempora? Aliquam
                beatae deserunt doloremque eligendi fuga
                ipsum magnam magni minima nesciunt numquam,
                omnis, optio pariatur quis rem sequi
                similique soluta suscipit tempore! Aut
                commodi consequuntur eius, fugit harum iste
                voluptatum! Accusamus aperiam beatae
                consequatur debitis deleniti dolores dolorum
                earum et eveniet, expedita illum in iste
                libero nam, nisi numquam obcaecati pariatur
                perferendis praesentium quas quasi
                recusandae sequi totam?
            </h1>
            <form action={logout}>
                <button type={"submit"}>
                    Hesabdan cix
                </button>
            </form>
        </div>
    )
}
