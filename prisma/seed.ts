import { prisma } from "../src/lib/prisma";

async function main() {
  const cliente = await prisma.clientes.create({
    data: {
      cnpj: "60.987.711/0001-23",
      razao_social: "Corona-Queirós",
      nome_fantasia: "Carrara e Torres",
      jornada_trabalho: 6.5,
      is_ativo: true,
    },
  });

  await prisma.projetos.create({
    data: {
      wo: "1347875866",
      motivo:
        "Owl and the fan, and skurried away into the air off all its feet at the other, trying every door.",
      st: "6130523387",
      planta: "Refinaria 3",
      tipos_servicos: {
        create: {
          servico: "MONTAGEM",
        },
      },
      classificacoes: {
        create: {
          classificacao: "PROGRAMADO",
        },
      },
      data_inicio: new Date(),
      data_conclusao: new Date(),
      data_validade: new Date(),
      situacoes: {
        create: {
          situacao: "PENDENTE",
        },
      },
      latitude: "-2.671237",
      longitude: "-44.973634",
      areas: {
        create: {
          descricao:
            "King, and he went on, yawning and rubbing its eyes, for it was written to nobody, which isn't.",
          is_ativo: true,
          clientes: {
            connect: {
              id: cliente.id,
            },
          },
        },
      },
      clientes: {
        connect: {
          id: cliente.id,
        },
      },
      is_ativo: true,
      andaimes: {
        create: {
          tag: "GAB-123-321",
          tipo_andaime: "De subir",
        },
      },
    },
  });
}

main();
