window.BENCHMARK_DATA = {
  "lastUpdate": 1698194947431,
  "repoUrl": "https://github.com/planetarium/libplanet",
  "entries": {
    "Benchmark.Net Benchmark": [
      {
        "commit": {
          "author": {
            "email": "49699333+dependabot[bot]@users.noreply.github.com",
            "name": "dependabot[bot]",
            "username": "dependabot[bot]"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "ab2a1328b2854206290ba75aefd906faa95dcc9e",
          "message": "Bump postcss from 8.4.21 to 8.4.31\n\nBumps [postcss](https://github.com/postcss/postcss) from 8.4.21 to 8.4.31.\n- [Release notes](https://github.com/postcss/postcss/releases)\n- [Changelog](https://github.com/postcss/postcss/blob/main/CHANGELOG.md)\n- [Commits](https://github.com/postcss/postcss/compare/8.4.21...8.4.31)\n\n---\nupdated-dependencies:\n- dependency-name: postcss\n  dependency-type: indirect\n...\n\nSigned-off-by: dependabot[bot] <support@github.com>",
          "timestamp": "2023-10-04T12:00:35Z",
          "tree_id": "1bed0488e4e5e26951a5fed09d30df78dabb68c4",
          "url": "https://github.com/planetarium/libplanet/commit/ab2a1328b2854206290ba75aefd906faa95dcc9e"
        },
        "date": 1696422146020,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 1551495,
            "unit": "ns",
            "range": "± 180439.81193828382"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 2883556.1224489794,
            "unit": "ns",
            "range": "± 253024.94806554646"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 2187920.4081632653,
            "unit": "ns",
            "range": "± 245082.66771071925"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 9909291.304347826,
            "unit": "ns",
            "range": "± 868337.0893856116"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 61532.25806451613,
            "unit": "ns",
            "range": "± 9554.900419137572"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 8245624.561403509,
            "unit": "ns",
            "range": "± 352093.4602390504"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 22038810.101010103,
            "unit": "ns",
            "range": "± 1981834.1570937408"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 55887074,
            "unit": "ns",
            "range": "± 4064777.000719695"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 110822871.42857143,
            "unit": "ns",
            "range": "± 7802281.871363415"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 210743504,
            "unit": "ns",
            "range": "± 20105782.500764914"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 5115525.792910447,
            "unit": "ns",
            "range": "± 240099.3318938779"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 1739506.0026041667,
            "unit": "ns",
            "range": "± 30468.779377388495"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 1323519.8874080882,
            "unit": "ns",
            "range": "± 26674.39740627718"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 3287077.734375,
            "unit": "ns",
            "range": "± 44763.67677559342"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 1127828.0294215425,
            "unit": "ns",
            "range": "± 101884.93671626947"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 935517.6039751838,
            "unit": "ns",
            "range": "± 18509.494311583334"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 3410877.0833333335,
            "unit": "ns",
            "range": "± 239445.41119633606"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 3623363.5416666665,
            "unit": "ns",
            "range": "± 286147.785931746"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 4882359.793814433,
            "unit": "ns",
            "range": "± 344995.9186533329"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 4486471.134020618,
            "unit": "ns",
            "range": "± 414715.3391079343"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 12169733.333333334,
            "unit": "ns",
            "range": "± 581888.4784669215"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 301510.20408163266,
            "unit": "ns",
            "range": "± 44294.69608191085"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 300786.4583333333,
            "unit": "ns",
            "range": "± 37094.24588599797"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 255061.8556701031,
            "unit": "ns",
            "range": "± 30488.493195859188"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 4378539.759036144,
            "unit": "ns",
            "range": "± 232025.57730106488"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 4064217.3469387754,
            "unit": "ns",
            "range": "± 304706.18297534453"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 29621.21212121212,
            "unit": "ns",
            "range": "± 10086.900706495962"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 99748.91304347826,
            "unit": "ns",
            "range": "± 11800.39573340161"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 94605.20833333333,
            "unit": "ns",
            "range": "± 14634.245128548866"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 110146.31578947368,
            "unit": "ns",
            "range": "± 23261.784067098604"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 5641.935483870968,
            "unit": "ns",
            "range": "± 1002.9654487790694"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 26904.040404040403,
            "unit": "ns",
            "range": "± 9213.05550139693"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "49699333+dependabot[bot]@users.noreply.github.com",
            "name": "dependabot[bot]",
            "username": "dependabot[bot]"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "1691d834a585bd5b96539e3c138d3b1f111a77d9",
          "message": "Bump postcss from 8.4.21 to 8.4.31\n\nBumps [postcss](https://github.com/postcss/postcss) from 8.4.21 to 8.4.31.\n- [Release notes](https://github.com/postcss/postcss/releases)\n- [Changelog](https://github.com/postcss/postcss/blob/main/CHANGELOG.md)\n- [Commits](https://github.com/postcss/postcss/compare/8.4.21...8.4.31)\n\n---\nupdated-dependencies:\n- dependency-name: postcss\n  dependency-type: indirect\n...\n\nSigned-off-by: dependabot[bot] <support@github.com>",
          "timestamp": "2023-10-25T00:31:37Z",
          "tree_id": "82d924812613895c5f3c2a2cf73e7fd310075947",
          "url": "https://github.com/planetarium/libplanet/commit/1691d834a585bd5b96539e3c138d3b1f111a77d9"
        },
        "date": 1698194879842,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 1376598.98989899,
            "unit": "ns",
            "range": "± 105580.28330829141"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 2587478.846153846,
            "unit": "ns",
            "range": "± 105245.0852777132"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 2047705.1546391752,
            "unit": "ns",
            "range": "± 151345.49627916337"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 9041876,
            "unit": "ns",
            "range": "± 453057.42904273275"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 55579.78723404255,
            "unit": "ns",
            "range": "± 4904.081683510681"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 7750983.333333333,
            "unit": "ns",
            "range": "± 259642.15892465712"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 21087166.666666668,
            "unit": "ns",
            "range": "± 184007.99930851866"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 53849738.461538464,
            "unit": "ns",
            "range": "± 323106.25068353175"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 106794338.46153846,
            "unit": "ns",
            "range": "± 629052.9621826522"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 214350871.42857143,
            "unit": "ns",
            "range": "± 2812641.1913766344"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 4517165.745192308,
            "unit": "ns",
            "range": "± 18568.004877740263"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 1436955.1231971155,
            "unit": "ns",
            "range": "± 6249.134733782847"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 1073445.99609375,
            "unit": "ns",
            "range": "± 7651.24404524681"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 2685832.001201923,
            "unit": "ns",
            "range": "± 20701.32446687308"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 842418.3872767857,
            "unit": "ns",
            "range": "± 3641.598820265169"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 760189.2508370535,
            "unit": "ns",
            "range": "± 5122.534802979379"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 3315910.5263157897,
            "unit": "ns",
            "range": "± 62951.37360373077"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 3435234.782608696,
            "unit": "ns",
            "range": "± 165806.88521332043"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 4218130.555555556,
            "unit": "ns",
            "range": "± 140198.42228467163"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 3962362.0689655175,
            "unit": "ns",
            "range": "± 165786.49113018325"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 10249723.529411765,
            "unit": "ns",
            "range": "± 282552.0741051199"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 256687.5,
            "unit": "ns",
            "range": "± 4834.028685613412"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 254545.45454545456,
            "unit": "ns",
            "range": "± 5963.837632544945"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 230852.04081632654,
            "unit": "ns",
            "range": "± 15521.884979534685"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 4074475,
            "unit": "ns",
            "range": "± 77384.95547154713"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 3647433.3333333335,
            "unit": "ns",
            "range": "± 91538.13017187055"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 23828.865979381444,
            "unit": "ns",
            "range": "± 2707.549582605652"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 88054.73684210527,
            "unit": "ns",
            "range": "± 6431.848422665048"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 69674.07407407407,
            "unit": "ns",
            "range": "± 2802.841225935877"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 89764.58333333333,
            "unit": "ns",
            "range": "± 8596.069838400957"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 5625.773195876289,
            "unit": "ns",
            "range": "± 929.5247834372436"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 21130.85106382979,
            "unit": "ns",
            "range": "± 2369.793176209605"
          }
        ]
      }
    ]
  }
}